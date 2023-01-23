import { createGlobalStyle } from 'styled-components';

export const Theme = createGlobalStyle`{

    :root {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
        }

    colors: {
        primary: '#0070f3',
    },

    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace',
    },

    background: {
        primary: '#fff',
        secondary: '#f7fafc',
    },

    text: {
        primary: '#000',
        secondary: '#fff',
    },
}`;
