// wrapper function: enable shadows on specified charts
// default is to implement on all charts
const shadows = (config, ps, flags) =>
  function({ chartIDs=[...Array(ps.charts.length).keys()] }={}) {
    ps.charts.forEach( (pc, i) => {
      if (chartIDs.includes(i)) {
        pc
          .shadows()
          .hideAxis(config.partition[i])
          .render()
          .updateAxes(0);
      }
    });
    return this;
  }
export default shadows;
