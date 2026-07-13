import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

async function getAccessToken() {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token as string,
      }),
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching access token", error);
    return { access_token: null };
  }
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    if (!access_token) {
      return NextResponse.json(
        { error: "Failed to get access token" },
        { status: 500 },
      );
    }

    // Check now playing
    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (nowPlayingRes.status === 200) {
      const song = await nowPlayingRes.json();

      // Only return if item exists
      if (song && song.item) {
        return NextResponse.json({
          isPlaying: song.is_playing,
          title: song.item.name,
          artist: song.item.artists.map((a: any) => a.name).join(", "),
          albumImageUrl: song.item.album.images[0].url,
          songUrl: song.item.external_urls.spotify,
          lastPlayed: new Date().toISOString(),
        });
      }
    }

    // Recently played fallback
    const recentlyPlayedRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (recentlyPlayedRes.status === 200) {
      const recentSongs = await recentlyPlayedRes.json();

      if (recentSongs.items?.length > 0) {
        const item = recentSongs.items[0];
        const song = item.track;

        return NextResponse.json({
          isPlaying: false,
          title: song.name,
          artist: song.artists.map((a: any) => a.name).join(", "),
          albumImageUrl: song.album.images[0].url,
          songUrl: song.external_urls.spotify,
          lastPlayed: item.played_at, // FIXED
        });
      }
    }

    // No data fallback
    return NextResponse.json({
      isPlaying: false,
      title: "Not Playing",
      artist: "",
      albumImageUrl: "",
      songUrl: "",
      lastPlayed: null,
    });
  } catch (error) {
    console.error("Spotify API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch spotify data" },
      { status: 500 },
    );
  }
}
