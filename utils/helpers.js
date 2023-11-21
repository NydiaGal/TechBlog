module.exports = {

    format_time: (date) => {

      return date.toLocaleTimeString();
    },
    format_date: (timestamp) => {

        const date = new Date(timestamp);
    
     
        date.setFullYear(date.getFullYear());
    
        const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      }
    };