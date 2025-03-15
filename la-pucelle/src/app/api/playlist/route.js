export async function GET() {
    const songs = [
        { file: 'rinyeki', title: 'Rinyeki' },
    ];

    return new Response(JSON.stringify({ songs }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}