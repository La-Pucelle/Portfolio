export default function VideoSection() {
    return (
        <div style={{ width: '500px', height: '400px', padding: '1rem' }}>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NqlxaFkUxgg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}