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
import Pop from 'rs-pop';
Salt.Pop = Pop;
import SweetAlert from 'rs-sweetalert';
Salt.SweetAlert = SweetAlert;
import Tab from 'rs-tab';
Salt.Tab = Tab;
import Tree from 'rs-tree';
Salt.Tree = Tree;

// Layouts
import { PageBase, PageLayout } from './src/base';
Salt.PageBase = PageBase;
Salt.PageLayout = PageLayout;

export default window.salt = Salt;
