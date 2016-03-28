'use strict';

class Salt {};

// Components
import BreadCrumb from 'rs-breadcrumb';
Salt.BreadCrumb = 'BreadCrumb';
import Button from 'rs-button';
Salt.Button = Button;
import Collapse from 'rs-collapse';
Salt.Collapse = Collapse;
import DatePicker from 'rs-datepicker';
Salt.DatePicker = DatePicker;
import Dialog from 'rs-dialog';
Salt.Dialog = Dialog;
import DropDown from 'rs-dropdown';
Salt.DropDown = DropDown;
import Grid from 'rs-grid';
Salt.Grid = Grid;
import Pagination from 'rs-pagination';
Salt.Pagination = Pagination;
import Panel from 'rs-panel';
Salt.Panel = Panel;
import Pop, { PopConfirm } from 'rs-pop';
Salt.Pop = Pop;
Salt.PopConfirm = PopConfirm;
import SweetAlert from 'rs-sweetalert';
Salt.SweetAlert = SweetAlert;
import Tab from 'rs-tab';
Salt.Tab = Tab;
import Tree from 'rs-tree';
Salt.Tree = Tree;

import Form, { FormControl, Tips } from 'rs-form';
Salt.Form = Form;
Salt.FormControl = FormControl;
Salt.Tips = Tips;

import Text, { Textarea, Radio, Checkbox } from 'rs-input';
Salt.Text = Text;
Salt.Textarea = Textarea;
Salt.Radio = Radio;
Salt.Checkbox = Checkbox;

import Select from 'rs-select';
Salt.Select = Select;

// Layouts
import { PageBase, PageLayout } from './src/base';
Salt.PageBase = PageBase;
Salt.PageLayout = PageLayout;

export default window.salt = Salt;
