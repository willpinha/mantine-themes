<div align="center">

<img alt="Mantine Themes" width="120" src="https://github.com/user-attachments/assets/b3d0a9d2-6d86-44cc-b698-b3f80266cf6c" />

# Mantine Themes

*Beautiful Mantine themes using semantic colors*

<img alt="Screenshot" src="https://github.com/user-attachments/assets/8dc88fcc-b7b4-4579-8020-c1c0cb0fdf4f" />

</div>

## About

**Mantine Themes** offers you a set of themes that you can use with the [Mantine](https://mantine.dev) UI library (React). It is also
possible to build your own themes in a convenient, simple and fast way

Each theme has primary, secondary and tertiary semantic colors so you can customize your frontend with the colors you prefer

Interested in Mantine Themes? Run it locally with the following command:

```
npm run dev
```

## License

Mantine Theme is under the [MIT License](LICENSE)

## Documentation

### 1. How it works?

Themes are dynamically generated based on the `createMantineTheme` function located in the
[create-mantine-theme.ts](https://github.com/willpinha/mantine-themes/blob/master/app/lib/create-mantine-theme.ts) file.
This function contains all the necessary documentation to use it

Just copy this file to your project and create your themes

```tsx
import { createMantineTheme } from "./create-mantine-theme.ts";

const theme = createMantineTheme({
  baseHue: 120,
  baseSaturation: 20,
  colors: {
    primary: [...],
    secondary: [...],
    tertiary: [...],
  }
});

export function App() {
  return (
    <MantineProvider theme={theme}>
      {/* Your application here */}
    </MantineProvider>
  );
}
```

### 2. How to use a specific theme?

Mantine Themes-specific themes are located in the [app/themes](https://github.com/willpinha/mantine-themes/tree/master/app/themes) directory.
Just copy the color theme that interests you

### 3. How do I create my own themes?

Just use the `createMantineTheme` function and follow the instructions in the function documentation

The base colors (text, background, shadow, border, ...) will have great accessibility by default. It is your duty to ensure that the semantic
colors (primary, secondary, tertiary) generated with [Colors generator](https://mantine.dev/colors-generator) have good contrast with the base colors

