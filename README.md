# ChoozeDisplay jQuery Plugin

## Overview

**ChoozeDisplay** is a flexible jQuery plugin that dynamically displays content based on user selections from checkboxes, radio buttons, or select dropdowns. This plugin allows developers to create interactive and responsive web applications with minimal effort.

## Table of Contents

- [Requirements](#requirements)
- [Features](#features)
- [Installation](#installation)
    - [npm](#npm)
    - [CDN](#cdn)
    - [Local Download](#local-download)
- [Usage](#usage)
- [Example](#example)
- [Options](#options)
- [Demo](#demo)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## Requirements

To use the ChoozeDisplay jQuery Plugin, you need the following dependencies:
- jQuery (minimum version 3.7.0)

You can include these dependencies in your HTML file via CDN or by downloading the files locally.

## Features

- Dynamically show or hide content based on checkbox, radio button, or select dropdown selections.
- Easy to configure using both JavaScript and HTML data attributes.
- Supports multiple conditions and actions.
- Lightweight and easy to integrate with existing jQuery projects.

## Installation

To use the ChoozeDisplay jQuery Plugin in your project, you can include the necessary files via npm, CDN,
or by downloading the files locally.

### npm

You can install ChoozeDisplay via npm:
```bash
npm install choozedisplay-js
```

### CDN

You can also include ChoozeDisplay directly from a CDN by adding the following script tag to your HTML file:
```html
<script src="https://cdn.jsdelivr.net/npm/choozedisplay-js@latest/dist/ChoozeDisplay.min.js"></script>
```

### Local Download

If you prefer to host the library locally,
you can download the latest release from the source code and include it in your project:
```html
<script src="path/to/ChoozeDisplay.min.js"></script>
```

## Usage

To use the ChoozeDisplay jQuery Plugin, follow these steps:

- Include the necessary scripts as described in the installation section.
- Create input elements and the target divs in your HTML.
- Initialize ChoozeDisplay with the option object or data attributes:

**HTML:**
```html
<!-- Checkbox Input -->
<div class="container mt-3 bg-light p-5 rounded">
    <h2 class="mb-3">Choose your favorite Sports:</h2>
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="" id="football">
        <label class="form-check-label" for="football">Football</label>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="" id="basketball">
        <label class="form-check-label" for="basketball">Basketball</label>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="" id="tennis">
        <label class="form-check-label" for="tennis">Tennis</label>
    </div>
</div>

<!-- Radio Input -->
<div class="container mt-3 bg-light p-5 rounded">
    <h2 class="mb-3">Choose your preferred OS:</h2>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="os" id="windows" value="windows">
        <label class="form-check-label" for="windows">Windows</label>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="os" id="macos" value="macos">
        <label class="form-check-label" for="macos">MacOS</label>
    </div>
    <div class="form-check mb-3">
        <input class="form-check-input" type="radio" name="os" id="linux" value="linux">
        <label class="form-check-label" for="linux">Linux</label>
    </div>
</div>

<!-- Select Input -->
<div class="container mt-3 bg-light p-5 rounded">
    <h2 class="mb-3">Select your Favorite Fruit:</h2>
    <select class="form-select mb-3" aria-label="Favorite Fruit" id="fruits">
        <option selected>Select fruit...</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
    </select>
</div>

<div class="container mt-5 bg-light p-5 rounded">

    <div class="alert alert-secondary" id="apple-football-windows-info" style="display:none;">Selecting Apple, and Football is good with Windows.</div>
    <div class="alert alert-success" id="apple-football-macos-info" style="display:none;">Selecting Apple, and Football is good with macOS.</div>
    <div class="alert alert-danger" id="apple-basketball-windows-info" style="display:none;">Selecting Apple, and Basketball is good with Windows.</div>
    <div class="alert alert-warning" id="apple-basketball-macos-info" style="display:none;">Selecting Apple, and Basketball is good with macOS.</div>
    <div class="alert alert-info" id="banana-football-windows-info" style="display:none;">Selecting Banana, and Football is good with Windows.</div>
    <div class="alert alert-light" id="banana-football-macos-info" style="display:none;">Selecting Banana, and Football is good with macOS.</div>
    <div class="alert alert-dark" id="banana-basketball-windows-info" style="display:none;">Selecting Banana, and Basketball is good with Windows.</div>
    <div class="alert alert-primary" id="banana-basketball-macos-info" style="display:none;">Selecting Banana, and Basketball is good with macOS.</div>
    <div class="alert alert-secondary" id="orange-football-windows-info" style="display:none;">Selecting Orange, and Football is good with Windows.</div>
    <div class="alert alert-success" id="orange-football-macos-info" style="display:none;">Selecting Orange, and Football is good with macOS.</div>
    <div class="alert alert-danger" id="orange-basketball-windows-info" style="display:none;">Selecting Orange, and Basketball is good with Windows.</div>
    <div class="alert alert-warning" id="orange-basketball-macos-info" style="display:none;">Selecting Orange, and Basketball is good with macOS.</div>
</div>
```

**JavaScript:**
```javascript
$(document).ready(function() {
  const options = {
    triggerControls: [
      {
        conditions: [
          { type: 'checkbox', id: 'football', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'apple' },
          { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
        ],
        action: 'show',
        target: '#apple-football-windows-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'football', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'apple' },
          { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
        ],
        action: 'show',
        target: '#apple-football-macos-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'basketball', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'apple' },
          { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
        ],
        action: 'show',
        target: '#apple-basketball-windows-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'basketball', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'apple' },
          { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
        ],
        action: 'show',
        target: '#apple-basketball-macos-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'football', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'banana' },
          { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
        ],
        action: 'show',
        target: '#banana-football-windows-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'football', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'banana' },
          { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
        ],
        action: 'show',
        target: '#banana-football-macos-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'basketball', state

: 'checked' },
          { type: 'select', id: 'fruits', value: 'banana' },
          { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
        ],
        action: 'show',
        target: '#banana-basketball-windows-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'basketball', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'banana' },
          { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
        ],
        action: 'show',
        target: '#banana-basketball-macos-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'football', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'orange' },
          { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
        ],
        action: 'show',
        target: '#orange-football-windows-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'football', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'orange' },
          { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
        ],
        action: 'show',
        target: '#orange-football-macos-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'basketball', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'orange' },
          { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
        ],
        action: 'show',
        target: '#orange-basketball-windows-info'
      },
      {
        conditions: [
          { type: 'checkbox', id: 'basketball', state: 'checked' },
          { type: 'select', id: 'fruits', value: 'orange' },
          { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
        ],
        action: 'show',
        target: '#orange-basketball-macos-info'
      }
    ]
  };

  // Initialize the plugin with options object
  $(document).ChoozeDisplay(options);

  // Initialize the plugin to read from attributes
  $('[data-target]').ChoozeDisplay();
});
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ChoozeDisplay - Example</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <!-- Checkbox Input -->
    <div class="container mt-3 bg-light p-5 rounded">
        <h2 class="mb-3">Choose your favorite Sports:</h2>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="football">
            <label class="form-check-label" for="football">Football</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="basketball">
            <label class="form-check-label" for="basketball">Basketball</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="tennis">
            <label class="form-check-label" for="tennis">Tennis</label>
        </div>
    </div>

    <!-- Radio Input -->
    <div class="container mt-3 bg-light p-5 rounded">
        <h2 class="mb-3">Choose your preferred OS:</h2>
        <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="os" id="windows" value="windows">
            <label class="form-check-label" for="windows">Windows</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="os" id="macos" value="macos">
            <label class="form-check-label" for="macos">MacOS</label>
        </div>
        <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="os" id="linux" value="linux">
            <label class="form-check-label" for="linux">Linux</label>
        </div>
    </div>

    <!-- Select Input -->
    <div class="container mt-3 bg-light p-5 rounded">
        <h2 class="mb-3">Select your Favorite Fruit:</h2>
        <select class="form-select mb-3" aria-label="Favorite Fruit" id="fruits">
            <option selected>Select fruit...</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
        </select>
    </div>

    <div class="container mt-5 bg-light p-5 rounded">
        <div class="alert alert-secondary" id="apple-football-windows-info" style="display:none;">Selecting Apple, and Football is good with Windows.</div>
        <div class="alert alert-success" id="apple-football-macos-info" style="display:none;">Selecting Apple, and Football is good with macOS.</div>
        <div class="alert alert-danger" id="apple-basketball-windows-info" style="display:none;">Selecting Apple, and Basketball is good with Windows.</div>
        <div class="alert alert-warning" id="apple-basketball-macos-info" style="display:none;">Selecting Apple, and Basketball is good with macOS.</div>
        <div class="alert alert-info" id="banana-football-windows-info" style="display:none;">Selecting Banana, and Football is good with Windows.</div>
        <div class="alert alert-light" id="banana-football-macos-info" style="display:none;">Selecting Banana, and Football is good with macOS.</div>
        <div class="alert alert-dark" id="banana-basketball-windows-info" style="display:none;">Selecting Banana, and Basketball is good with Windows.</div>
        <div class="alert alert-primary" id="banana-basketball-macos-info" style="display:none;">Selecting Banana, and Basketball is good with macOS.</div>
        <div class="alert alert-secondary" id="orange-football-windows-info" style="display:none;">Selecting Orange, and Football is good with Windows.</div>
        <div class="alert alert-success" id="orange-football-macos-info" style="display:none;">Selecting Orange, and Football is good with macOS.</div>
        <div class="alert alert-danger" id="orange-basketball-windows-info" style="display:none;">Selecting Orange, and Basketball is good with Windows.</div>
        <div class="alert alert-warning" id="orange-basketball-macos-info" style="display:none;">Selecting Orange, and Basketball is good with macOS.</div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="path/to/ChoozeDisplay.min.js"></script>
    <script>
    $(document).ready(function() {
        const options = {
            triggerControls: [
                {
                    conditions: [
                        { type: 'checkbox', id: 'football', state: 'checked' },
                        { type: 'select', id: 'fruits', value: 'apple' },
                        { type: 'radio', name: 'os', value: 'windows', state: 'checked' }
                    ],
                    action: 'show',
                    target: '#apple-football-windows-info'
                },
                {
                    conditions: [
                        { type: 'checkbox', id: 'football', state: 'checked' },
                        { type: 'select', id: 'fruits', value: 'apple' },
                        { type: 'radio', name: 'os', value: 'macos', state: 'checked' }
                    ],
                    action: 'show',
                    target: '#apple-football-macos-info'
                },
                // Add the rest of the configurations here...
            ]
        };

        // Initialize the plugin with an option object
        $(document).ChoozeDisplay(options);

        // Initialize the plugin to read from attributes
        $('[data-target]').ChoozeDisplay();
    });
    </script>
</body>
</html>
```

## Options

| Option            | Type   | Description                                                                                            |
|-------------------|--------|--------------------------------------------------------------------------------------------------------|
| `triggerControls` | Array  | An array of objects defining the conditions and target elements for showing or hiding content.         |
| `conditions`      | Array  | An array of condition objects, each defining the type of input, ID or name, value, and state to match. |
| `action`          | String | The action to perform when the conditions are met (`show` or `hide`).                                  |
| `target`          | String | The selector for the target element to show or hide.                                                   |

## Demo

Here's a

Demo example:

[Demo](https://hichemtab-tech.github.io/ChoozeDisplay-js)

## Contributing

Contributions are always welcome!

If you have any ideas, improvements, or bug fixes,
please [open an issue](https://github.com/ChoozeDisplay-js/issues)
or [submit a pull request](https://github.com/ChoozeDisplay-js/pulls).

## Author

- [HichemTab-tech](https://www.github.com/HichemTab-tech)

## License

[MIT](https://github.com/ChoozeDisplay-js/blob/master/LICENSE)