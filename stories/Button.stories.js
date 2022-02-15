import React from 'react';

import Button from './Button';

export default {
    component: Button,
    title: 'Button',
};

const Template = args => <Button { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
    text: 'Click Me',
    color: "text-gray-900",
    bg: "bg-gray-200",
    size: "w-full max-w-xs border border-gray-200 text-sm py-2 px-4 rounded",
};

export const Open = Template.bind( {} );
Open.args = {
    ...Default.args,
    text: 'Open me',
    color: "text-white",
    bg: "bg-yellow-500",
    size: "w-full max-w-md border border-gray-200 text-sm py-2 px-4 rounded",
};