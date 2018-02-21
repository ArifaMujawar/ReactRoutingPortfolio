'use strict';

var visibility = false;

var toggleContent = function toggleContent() {
    visibility = !visibility;
    renderFunc();
};

var renderFunc = function renderFunc() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleContent },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey ! these are some details! '
            )
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};
renderFunc();
