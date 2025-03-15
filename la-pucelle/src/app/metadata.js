export const metadata = {
  title: 'La Pucelle | Portfolio',
  description: 'A creative portfolio showcasing innovative web development projects',
  openGraph: {
    title: 'La Pucelle | Portfolio',
    description: 'A creative portfolio showcasing innovative web development projects',
    url: 'https://lapushel.dev',
    siteName: 'La Pucelle',
    images: [
      {
        url: '/utsutsu-whitout.svg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'La Pucelle Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Pucelle | Portfolio',
    description: 'A creative portfolio showcasing innovative web development projects',
    images: ['utsutsu-whitout.svg'],
  },
};

export function onBlur() {
  document.title = 'Hey! Come Back!';
}

export function onFocus() {
  document.title = metadata.title;
}

export function setTitle(newTitle) {
  metadata.title = newTitle;
  if (typeof document !== 'undefined') {
    document.title = newTitle;
  }
}
