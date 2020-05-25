const styles = () => ({
  aroundTable: {
    left: 0,
    margin: 'auto',
    width: '50%',
  },
  tableHead: {
    backgroundColor: '#00000040',
    color: '#fff',
  },
  tableRow: {
    '&:nth-child(even)': {
      backgroundColor: '#01adff40',
    },
  },
});

export default styles;
