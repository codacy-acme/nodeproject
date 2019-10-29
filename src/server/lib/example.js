exports.pluralize = function (count, singular, plural) {
  if (count === 1) {
    return `${count} ${singular}`;
  }
  plural = plural || `${singular}s`;
  return `${count} ${plural}`;
};


exports.pluralize_v2 = function (count, singular, plural) {
  if (count === 1) {
    return `${count} ${singular}`;
  }
  plural = plural || `${singular}s`;
  return `${count} ${plural}`;
};

exports.method = function (count) {
  for(let i = 0; i < count; i++){
    const j = 9
    while(j>count){
      console.log("counting")
      j--
    }
  }
};
