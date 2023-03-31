export function rendezesSzoveg(list) {
  list.sort();
  console.log(list);
}
export function rendezesSzam(list) {
  list.sort(function (a, b) {
    console.log(a, b, a - b);
    return a - b;
  });
}
export function veletlenSorrend(list) {
  list.sort(function () {
    return 0.5 - Math.random();
  });
}
export function korSzerint(list) {
  list.sort(function (a, b) {
    console.log(a, b, a.kor - b.kor);
    return a.kor - b.kor;
  });
}
export function nevSzerint(list) {
  list.sort(function (a, b) {
    let e = 1;
    console.log(a, b, a.nev < b.nev);
    if (a.nev < b.nev) {
      e = -1;
    }
    return e;
  });
}
export function barmiSzerint(list, kulcs) {
  list.sort(function (a, b) {
    let e = 1;
    console.log(a, b, a[kulcs] < b[kulcs]);
    if (a[kulcs] < b[kulcs]) {
      e = -1;
    }
    return e;
  });
}
export function szuresKorSzerint(list, felt) {
  let szurtLista = list.filter(function (obj) {
    return evalt(obj.kor + felt);
  });
  console.log(szurtLista);
  return szuresKorSzerint;
}
