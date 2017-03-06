import angular from 'angular';
import RootComponent from './root.component';
import Counter from './components/counter/counter.module';

const RootModule = angular
  .module('app', [
    Counter.name
  ])
  .component('app', RootComponent);

export default RootModule;
