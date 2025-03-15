export function getPlaylistSongs() {
    const songs = [];
    const context = require.context('/public/assets/playlist', false, /\.(mp3|png)$/);
    const files = context.keys();

    files.forEach(file => {
        if (file.endsWith('.mp3')) {
            const name = file.replace('./', '').replace('.mp3', '');
            songs.push({
                file: name,
                title: name.charAt(0).toUpperCase() + name.slice(1),
                hasImage: files.includes(`./${name}.png`)
            });
        }
    });

    return songs;
}