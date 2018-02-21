'use strict';

console.log('App.js is running');
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    // e contains info about event
    e.preventDefault(); // prevents full page refresh, instead below code is exec

    var option = e.target.elements.option.value;
    // e.target points to element that event started on,option is value of form name attribute.

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    RenderList();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    RenderList();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var RenderList = function RenderList() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title,
            ' '
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options" : "No Options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    ' Item: ',
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add Option '
            )
        )
    );
    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};

RenderList();
