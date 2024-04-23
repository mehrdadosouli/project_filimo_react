import { createSlice } from "@reduxjs/toolkit";

const initialState={
    detail:[{
        id:1,
        title:'گناه فرشته',
        description:'سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند',
        src:'https://www.uptvs.com/wp-contents/uploads/2024/04/GonahFereshteh-18-207x290.jpg',
        subject:'خانوادگی ، درام',
        year:'1402',
        country:'ایران',
        time:'50دقیقه',
        actor:'امیر آقایی، دیبا زاهدی، لادن مستوفی',
        creator:'حامد عنقا '
        },
        {
            id:2,
            title:'گناه ',
            description:'سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند',
            src:'https://static.cdn.asset.filimo.com/flmt/mov_145330_155524.jpg?width=165&quality=85&secret=AgvUvdyi5NsspaRE0LX6hg',
            subject:'خانوادگی ، درام',
            year:'1402',
            country:'ایران',
            time:'50دقیقه',
            actor:'امیر آقایی، دیبا زاهدی، لادن مستوفی',
            creator:'حامد عنقا '
            },
            {
                id:3,
                title:' فرشته',
                description:'سریال گناه فرشته Fereshteh Sin محصول کشور ایران و در ژانر خانوادگی  درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند',
                src:'https://www.uptvs.com/wp-contents/uploads/2024/03/Moghiman-Nakoja-207x290.jpg',
                subject:'خانوادگی ، درام',
                year:'1402',
                country:'ایران',
                time:'50دقیقه',
                actor:'امیر آقایی، دیبا زاهدی، لادن مستوفی',
                creator:'حامد عنقا '
                },
                {
                    id:4,
                    title:'گناه فرشته',
                    description:'سریال گناه فرشته Fereshtehs Sin محصول کشور ایران و در ژانر خانوادگی ، درام می‌باشد و به کارگردانی حامد عنقا در سال 1402 ساخته شده است. در سریال گناه فرشته بازیگرانی چون امیر آقایی دیبا زاهدی لادن مستوفی محمد مهدی سلطانی، نفس بازغی، شهاب حسینی و به ایفای نقش پرداخته اند',
                    src:'https://www.uptvs.com/wp-contents/uploads/2020/04/63003.jpg',
                    subject:'خانوادگی ، درام',
                    year:'1402',
                    country:'ایران',
                    time:'50دقیقه',
                    actor:'امیر آقایی، دیبا زاهدی، لادن مستوفی',
                    creator:'حامد عنقا '
                    }
    ]}

export const detailFilmSlice =createSlice({
    name:'detailFilm',
    initialState,
    reducers:{

    }
})

export default detailFilmSlice.reducer