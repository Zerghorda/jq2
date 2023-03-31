import { OBJLISTA, SZOVEGLISTA, SZAMLISTA } from "./adat.js";
import {
  rendezesSzoveg,
  rendezesSzam,
  veletlenSorrend,
  korSzerint,
  nevSzerint,
  barmiSzerint,
  szuresKorSzerint,
} from "./adatKezeles.js";
$(function () {
  console.log(OBJLISTA);
  let jsonObj = JSON.stringify(OBJLISTA);
  console.log(jsonObj);
  rendezesSzoveg(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  rendezesSzam(SZAMLISTA);
  console.log(SZAMLISTA);
  veletlenSorrend(SZAMLISTA);
  console.log(SZAMLISTA);
  korSzerint(OBJLISTA);
  console.log(OBJLISTA);
  nevSzerint(OBJLISTA);
  console.log(OBJLISTA);
  barmiSzerint(OBJLISTA, "nev");
  console.log(OBJLISTA);
  const SZURTLISTA = szuresKorSzerint(OBJLISTA, ">=50");
  console.log(SZURTLISTA);
});
