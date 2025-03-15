const fs = require('fs');
const path = require('path');

const playlistDir = path.join(process.cwd(), 'public', 'assets', 'playlist');
const configFile = path.join(process.cwd(), 'src', 'app', 'config', 'playlist.js');

const songs = fs.readdirSync(playlistDir)
    .filter(file => file.endsWith('.mp3'))
    .map(file => {
        const name = file.replace('.mp3', '');
        return `        { file: '${name}', title: '${name.charAt(0).toUpperCase() + name.slice(1)}' }`;
    });

const configContent = `export const getPlaylistSongs = () => {
    return [
${songs.join(',\n')}
    ];
};
`;

fs.writeFileSync(configFile, configContent);