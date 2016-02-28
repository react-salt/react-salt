'use strict';

class Cat {};

// Components
import Grid from 'cat-grid';
import Tree from 'cat-tree';
Cat.Grid = Grid;
Cat.Tree = Tree;

// Layouts
import { PageBase, PageLayout } from './src/base';
Cat.PageBase = PageBase;
Cat.PageLayout = PageLayout;

export default window.cat = Cat;
