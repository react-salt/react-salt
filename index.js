'use strict';

class Cat {};

// Components
import Grid from 'cat-grid';
Cat.Grid = Grid;

// Layouts
import { PageBase, PageLayout } from './src/base';
Cat.PageBase = PageBase;
Cat.PageLayout = PageLayout;

export default window.cat = Cat;
