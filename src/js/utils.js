export function errorMsg(msg) {
  alert(msg);
}

export function cleanCtn(ctn) {
  while (ctn.firstChild) ctn.removeChild(ctn.firstChild);
}
