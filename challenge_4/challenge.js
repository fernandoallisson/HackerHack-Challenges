const timeConversion = (s) => {
  
  const hour = (Number((s[0]) + (s[1])))
  const minSec = s.slice(2, 8)
  const tag = s[8]

  if (hour == 12 && tag == "A" || tag == "a") {
    return`00${minSec}`
  }
  if (hour == 12 && tag == "P"|| tag == "p") {
    return `${hour}${minSec}`
  } 
  if (tag == "P"|| tag == "p") {
    return`${ hour + 12 }${ minSec }`
  }
  if (tag == "A" || tag == "a") {
    if(hour < 10) {
      return `0${hour}${minSec}`
    } else {
      return `${ hour }${ minSec }`
    }
  } else {
    return "Nenhuma condicao atendida!"
  }

}

console.log(timeConversion("06:40:03AM"))