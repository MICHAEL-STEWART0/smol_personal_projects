const stopWatch = function () {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error(`Stop Watch already running!`);
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error(`Stop Watch is not running!`);
    }
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  Object.defineProperty(this, `duration`, {
    get: function () {
      return duration;
    },
  });

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
};

let sw = new stopWatch();
