const CounterComponent = {
  restrict: 'E',
  bindings: {},
  template: `
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <div class="caption">
            <h3>Counter</h3>
            <p>Custom Store</p>

            <p>
              The counter value is:
              <b>{{ }}</b>
            </p>

            <p>
              <button class="btn btn-primary">
                Increment
              </button>
              <button class="btn btn-default">
                 Decrement
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
};

export default CounterComponent;
