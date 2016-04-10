const Page = require('./dist/base');
const Pop = require('rs-pop');
const Form = require('rs-form');
const Text = require('rs-input');

const Salt = {
    BreadCrumb: require('rs-breadcrumb'),
    Button: require('rs-button'),
    Collapse: require('rs-collapse'),
    DatePicker: require('rs-datepicker'),
    Dialog: require('rs-dialog'),
    DropDown: require('rs-dropdown'),
    Grid: require('rs-grid'),
    Pagination: require('rs-pagination'),
    Panel: require('rs-panel'),
    Sweet: require('rs-sweetalert'),
    Tab: require('rs-tab'),
    Tree: require('rs-tree'),
    Notify: require('rs-notify'),
    Select: require('rs-select'),
    Pop: Pop,
    PopConfirm: Pop.PopConfirm,
    Form: Form,
    FormControl: Form.FormControl,
    Tips: Form.Tips,
    Text: Text,
    Textarea: Text.Texyarea,
    Radio: Text.Radio,
    Checkbox: Text.Checkbox,
    PageBase: Page.PageBase,
    PageLayout: Page.PageLayout
};

module.exports = Salt;
