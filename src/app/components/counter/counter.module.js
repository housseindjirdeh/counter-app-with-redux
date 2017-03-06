import angular from 'angular';
import CounterComponent from './counter.component';

const CounterModule = angular
  .module('counter', [])
  .component('counter', CounterComponent);

export default CounterModule;
