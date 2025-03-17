import { readdirSync } from 'fs';
import { join } from 'path';

export async function GET() {
    const playlistDir = join(process.cwd(), 'public', 'assets', 'playlist');
    const sections = readdirSync(playlistDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const songs = {};
    
    // Add root section
    songs['root'] = readdirSync(playlistDir)
        .filter(file => file.endsWith('.mp3'))
        .map(file => ({
            file: file.replace('.mp3', ''),
            title: file.replace('.mp3', '').split('-').join(' ')
        }));

    // Add section songs
    sections.forEach(section => {
        const sectionPath = join(playlistDir, section);
        songs[section] = readdirSync(sectionPath)
            .filter(file => file.endsWith('.mp3'))
            .map(file => ({
                file: `${section}/${file.replace('.mp3', '')}`,
                title: file.replace('.mp3', '').split('-').join(' ')
            }));
    });

    return new Response(JSON.stringify({ sections: ['root', ...sections], songs }), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}