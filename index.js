'use strict';

class Salt {};

// Components
import Pagination from 'rs-pagination';
import Panel from 'rs-panel';
import Tree from 'rs-tree';
Salt.Pagination = Pagination;
Salt.Panel = Panel;
Salt.Tree = Tree;

// Layouts
import { PageBase, PageLayout } from './src/base';
Salt.PageBase = PageBase;
Salt.PageLayout = PageLayout;

export default window.salt = Salt;
