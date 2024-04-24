import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [
    {
      id: 1,
      title: "گناه فرشته",
      description:
        "سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند",
      src: "https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg",
      bg:'https://static.cdn.asset.filimo.com/flmt/mov_cvr_141218_6942.jpg?width=1920&quality=90&secret=j3CcykNiDaR5jiuDhEHvvA',
      subject: "خانوادگی ، درام",
      year: "1402",
      country: "ایران",
      time: "50دقیقه",
      actor: "امیر آقایی، دیبا زاهدی، لادن مستوفی",
      creator: "حامد عنقا ",
    },
    {
      id: 2,
      title: "قطب شمال",
      description:
        "سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند",
        bg:'https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_145135_292.jpg?width=1920&quality=80&secret=FfzN5r9Qd2y0ExbSuRiK3Q',
      src: "https://static.cdn.asset.filimo.com/flmt/mov_145330_155524.jpg?width=165&quality=85&secret=AgvUvdyi5NsspaRE0LX6hg",
      subject: "خانوادگی ، درام",
      year: "1402",
      country: "ایران",
      time: "50دقیقه",
      actor: "امیر آقایی، دیبا زاهدی، لادن مستوفی",
      creator: "حامد عنقا ",
    },
    {
      id: 3,
      title: " پسر دلفینی",
      description:
        "سریال گناه فرشته Fereshteh Sin محصول کشور ایران و در ژانر خانوادگی  درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند",
      src: "https://www.uptvs.com/wp-contents/uploads/2024/03/Moghiman-Nakoja-207x290.jpg",
      bg:'https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_146003_541.jpg?width=1920&quality=80&secret=X6eQsb8-TSKLmQZemgkwTA',
      subject: "خانوادگی ، درام",
      year: "1402",
      country: "ایران",
      time: "50دقیقه",
      actor: "امیر آقایی، دیبا زاهدی، لادن مستوفی",
      creator: "حامد عنقا ",
    },
    {
      id: 4,
      title: "عیدی HD ",
      description:
        "سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند",
      src: "https://static.cdn.asset.filimo.com/flmt/mov_145726_153894.jpg?width=300&quality=85&secret=2RRKAknjnhdCtKRplsiE1Q",
      bg:'https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_145726_408.jpg?width=1920&quality=80&secret=iW8as3YNlASykWNMhkvlfg',
      subject: "خانوادگی ، درام",
      year: "1402",
      country: "ایران",
      time: "50دقیقه",
      actor: "امیر آقایی، دیبا زاهدی، لادن مستوفی",
      creator: "حامد عنقا ",
    },
    {
      id: 5,
      title: "صداتو",
      description:
        "سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند",
      src: "https://static.cdn.asset.filimo.com/flmt/mov_146022_155498.jpg?width=165&quality=85&secret=C0D2Dpb_nk39oS4_gJF8WQ",
      bg:'https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_146022_399.jpg?width=1920&quality=80&secret=3NGRqOCnhgZOBYKwt3qS5Q',
      subject: "خانوادگی ، درام",
      year: "1402",
      country: "ایران",
      time: "50دقیقه",
      actor: "امیر آقایی، دیبا زاهدی، لادن مستوفی",
      creator: "حامد عنقا ",
    },
    {
        id:6,
        title: "اسکار",
        description:
          "سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند",
        src: "https://static.cdn.asset.filimo.com/flmt/mov_146014_154959.jpg?width=165&quality=85&secret=M1mahNLUrLmCXNXn6XzwVQ",
        bg:'https://static.cdn.asset.filimo.com/flmt/mov_cvr_filimo_hor_146239_482.jpg?width=1920&quality=80&secret=mFWpPGsO4GKL19OlIQhfAg',
        subject: "خانوادگی ، درام",
        year: "1402",
        country: "ایران",
        time: "50دقیقه",
        actor: "امیر آقایی، دیبا زاهدی، لادن مستوفی",
        creator: "حامد عنقا ",
      },
  ],
};

export const detailFilmSlice = createSlice({
  name: "detailFilm",
  initialState,
  reducers: {},
});

export default detailFilmSlice.reducer;
