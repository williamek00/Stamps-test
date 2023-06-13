function formatDate(date) {
    const formattedDate = new Date(date);
    const weekdayOptions = { weekday: 'short' };
    const dayOptions = { day: 'numeric' };
    const monthOptions = { month: 'short' };
    const yearOptions = { year: 'numeric' };

    const weekday = formattedDate.toLocaleString('en-US', weekdayOptions);
    const day = formattedDate.toLocaleString('id-ID', dayOptions);
    const month = formattedDate.toLocaleString('id-ID', monthOptions);
    const year = formattedDate.toLocaleString('id-ID', yearOptions);

    return `${weekday}, ${day} ${month} ${year}`;
}

function temperatureFormat(temp){
    const celsius = temp - 273.15;
  return celsius.toFixed(2)+'°C';
}


module.exports = {
    formatDate,
    temperatureFormat
}