import { Lottie } from '../components';
import React from 'react';
import images from '../index';
import Colors from './Colors';
import { useTranslation } from "react-i18next";

export const Swiperdata = [
  {
    key: 's1',
    text: 'Swiperfirst',
    title: "Swipertitle",
    animation: <Lottie
      source={images.First_Swiper}
    />,
  },
  {
    key: 's2',
    text: 'SwiperFirstTwo',
    title: 'SwiperTitleTwo',
    animation: <Lottie
      source={images.Two_Swiper}
    />,
  },
  {
    key: 's3',
    text: 'SwiperFirstThree',
    title: 'Swipertitlethree',
    animation: <Lottie
      source={images.Three_Swiper}
    />,
    backgroundColor: 'transparent',
  },
]

export const Faqdataset = [
  {
    "id": 1,
    "paymentparegraph": "FAQ_paregraph_One",
    "smalltext": 'FAQ_paregraph_Two',
  },
  {
    "id": 2,
    "paymentparegraph": "FAQ_paregraph_Three",
    "smalltext": 'FAQ_paregraph_Four',
  },
  {
    "id": 3,
    "paymentparegraph": "FAQ_paregraph_Five",
    "smalltext": 'FAQ_paregraph_Six',
  },
  {
    "id": 4,
    "paymentparegraph": "FAQ_Paregraph_Saven",
    "smalltext": 'FAQ_Paregraph_Aeight',
  },
  {
    "id": 5,
    "paymentparegraph": "FAQ_Paregraph_Nine",
    "smalltext": 'FAQ_Paregraph_Ten',
  },
  {
    "id": 6,
    "paymentparegraph": "FAQ_Paregraph_Eleven",
    "smalltext": 'FAQ_One',
  },
  {
    "id": 7,
    "paymentparegraph": "FAQ_Two",
    "smalltext": 'FAQ_Three',
  },
  {
    "id": 8,
    "paymentparegraph": "FAQ_Four",
    "smalltext": 'FAQ_Five',
  },
]

export const Offersdata = [
  {
    "id": 1,
    "image": images.homeslider_2,
  },
  {
    "id": 2,
    "image": images.homeslider_1,
  },
  {
    "id": 3,
    "image": images.homeslider_3,
  },
]

export const ExclusiveData = [
  {
    "id": 1,
    "image": images.Exclusive_3,
  },
  {
    "id": 2,
    "image": images.Exclusive_2,
  },
  {
    "id": 3,
    "image": images.Exclusive_4,
  },
  {
    "id": 4,
    "image": images.Exclusive_1,
  },
]

export const Lastlistdata = [
  {
    "id": 1,
    "image": images.bus1,
    "text": "GSRTC",
    "texttwo": "Lastlistdata_texttwo_1",
  },
  {
    "id": 2,
    "image": images.bus3,
    "text": "Inter_City",
    "texttwo": "Lastlistdata_texttwo_1",
  },
  {
    "id": 3,
    "image": images.bus2,
    "text": "Travells",
    "texttwo": "Lastlistdata_texttwo_1",
  },
]

export const FlightFrom = [
  { label: 'تهران' },
  { label: 'مشهد' },
  { label: 'اصفهان' },
  { label: 'ساری' },
  { label: 'همدان' },
  { label: 'بابل' },
  { label: 'آمل' },
  { label: 'شهرری' },
  { label: 'قم' },
  { label: 'بیرجند' },
  { label: 'شیراز ' },
  { label: 'کرمان' },
  { label: 'تبریز' },
  { label: 'اردبیل' },
  { label: 'ارومیه' },
  { label: 'کرمانشاه' },
  { label: 'اهواز' },
  { label: 'بوشهر' },
  { label: 'بندرعباس' },
  { label: 'زاهدان' },
];

export const BusFlatlistData = [
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_1",
    AcNonAc: "BusFlatlistData_AcNonAc_1",
    MainPrice: '2,950',
    DiscountAmount: '1,200',
    Off: 'BusFlatlistData_Off_1',
    FromTme: '9:25 PM',
    SeatAvl: "BusFlatlistData_SeatAvl_1",
    TravelTime: '10h',
    rating: 4.9,
    ratingCount: 'BusFlatlistData_ratingCount_1',
    BordandDep: 'BusFlatlistData_BordandDep',
    cancelpolicy: 'BusFlatlistData_cancelpolicy'
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_2",
    AcNonAc: "BusFlatlistData_AcNonAc_1",
    MainPrice: '3,010',
    DiscountAmount: '1,200',
    Off: 'BusFlatlistData_Off_2',
    FromTme: '11:00 PM',
    SeatAvl: "BusFlatlistData_SeatAvl_1",
    TravelTime: '8h',
    rating: 3.6,
    ratingCount: 'BusFlatlistData_ratingCount_2',
    BordandDep: 'BusFlatlistData_BordandDep',
    cancelpolicy: 'BusFlatlistData_cancelpolicy'
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_3",
    AcNonAc: "BusFlatlistData_AcNonAc_2",
    MainPrice: '3,099',
    DiscountAmount: '1,000',
    Off: 'BusFlatlistData_Off_3',
    FromTme: '10:00 PM',
    SeatAvl: "BusFlatlistData_SeatAvl_1",
    TravelTime: '6h',
    rating: 4.8,
    ratingCount: 'BusFlatlistData_ratingCount_3',
    BordandDep: 'BusFlatlistData_BordandDep',
    cancelpolicy: 'BusFlatlistData_cancelpolicy'
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_4",
    AcNonAc: "BusFlatlistData_AcNonAc_3",
    MainPrice: '3,161',
    DiscountAmount: '1,200',
    Off: 'BusFlatlistData_Off_4',
    FromTme: '8:00 PM',
    SeatAvl: "BusFlatlistData_SeatAvl_1",
    TravelTime: '5h',
    rating: 4.5,
    ratingCount: 'BusFlatlistData_ratingCount_4',
    BordandDep: 'BusFlatlistData_BordandDep',
    cancelpolicy: 'BusFlatlistData_cancelpolicy'
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_5",
    AcNonAc: "BusFlatlistData_AcNonAc_1",
    MainPrice: '3,430',
    DiscountAmount: '1,200',
    Off: 'BusFlatlistData_Off_5',
    FromTme: '6:30 PM',
    SeatAvl: "BusFlatlistData_SeatAvl_1",
    TravelTime: '3h',
    rating: 4.4,
    ratingCount: 'BusFlatlistData_ratingCount_5',
    BordandDep: 'BusFlatlistData_BordandDep',
    cancelpolicy: 'BusFlatlistData_cancelpolicy'
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_6",
    AcNonAc: "BusFlatlistData_AcNonAc_1",
    MainPrice: '3,150',
    DiscountAmount: '1,200',
    Off: 'BusFlatlistData_Off_6',
    FromTme: '9:10 PM',
    SeatAvl: "BusFlatlistData_SeatAvl_1",
    TravelTime: '7h',
    rating: 3.5,
    ratingCount: 'BusFlatlistData_ratingCount_6',
    BordandDep: 'BusFlatlistData_BordandDep',
    cancelpolicy: 'BusFlatlistData_cancelpolicy'
  },
]

export const MobileSelectData = [
  {
    id: 1,
    img: images.HomeViIcon,
    Cityfrom: "Delhi",
    Cityto: "Mumbai",
    CardType: 'Mon, 30 Jan',
  },
]

export const BusSeatData = [
  {
    id: 1,
    slepSeatName: '2L',
    slepSeatName: '3L',
    slepSeatName: '4L',
  },
  {
    id: 1,
    slepSeatName: '8',
    slepSeatName: '9',
    slepSeatName: '10L',
  },
  {
    id: 1,
    slepSeatName: '14L',
    slepSeatName: '15L',
    slepSeatName: '16L',
  },
  {
    id: 1,
    slepSeatName: '20L',
    slepSeatName: '21L',
    slepSeatName: '22L',
  },
  {
    id: 1,
    slepSeatName: '26L',
    slepSeatName: '27L',
    slepSeatName: '28L',
  },
  {
    id: 1,
    slepSeatName: '32L',
    slepSeatName: '33L',
    slepSeatName: '34L',
  },
]

export const BusSeatUpperData = [
  {
    id: 1,
    slepSeatName: '1U',
    slepSeatName: '5U',
    slepSeatName: '6U',
  },
  {
    id: 1,
    slepSeatName: '7U',
    slepSeatName: '11U',
    slepSeatName: '12U',
  },
  {
    id: 1,
    slepSeatName: '13U',
    slepSeatName: '17U',
    slepSeatName: '18U',
  },
  {
    id: 1,
    slepSeatName: '19U',
    slepSeatName: '23U',
    slepSeatName: '24U',
  },
  {
    id: 1,
    slepSeatName: '25U',
    slepSeatName: '29U',
    slepSeatName: '30U',
  },
  {
    id: 1,
    slepSeatName: '31U',
    slepSeatName: '35U',
    slepSeatName: '36U',
  },
]

export const BusSeatShowData = [
  {
    id: 1,
    Seaticon: 'seat',
    SeaticonColor: Colors.Shadow_Color,
    text: "BusSeatShowData_text_1"
  },
  {
    id: 1,
    Seaticon: 'seat',
    SeaticonColor: Colors.GreenColor,
    text: "BusSeatShowData_text_2"
  },

  {
    id: 1,
    Seaticon: 'seat',
    SeaticonColor: Colors.Pink,
    text: "BusSeatShowData_text_3"
  },

  {
    id: 1,
    Seaticon: 'seat',
    SeaticonColor: Colors.Pink,
    text: "BusSeatShowData_text_4"
  },
  {
    id: 1,
    Seaticon: 'seat',
    SeaticonColor: Colors.blue_color,
    text: "BusSeatShowData_text_5"
  },
  {
    id: 1,
    Seaticon: 'seat',
    SeaticonColor: Colors.Red,
    text: "BusSeatShowData_text_6"
  },
]

export const BusFlatlistDataBook = [
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_1",
    AcNonAc: 'BusFlatlistData_AcNonAc_1',
    Date: '20 Jan 2023',
    DiscountAmount: '₹ 250',
    BusType: 'Luxury',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_2",
    AcNonAc: 'BusFlatlistData_AcNonAc_1',
    Date: '16 Dec 2022',
    DiscountAmount: '₹ 360',
    BusType: 'Express',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_3",
    AcNonAc: 'BusFlatlistData_AcNonAc_2',
    Date: '2 Dec 2022',
    DiscountAmount: '₹ 590',
    BusType: 'Luxury',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_4",
    AcNonAc: 'BusFlatlistData_AcNonAc_3',
    Date: '13 Aug 2022',
    DiscountAmount: '₹ 420',
    BusType: 'Luxury',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_5",
    AcNonAc: 'BusFlatlistData_AcNonAc_1',
    Date: '20 Aug 2022',
    DiscountAmount: '₹ 305',
    BusType: 'Luxury',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_6",
    AcNonAc: 'BusFlatlistData_AcNonAc_1',
    Date: '20 July 2022',
    DiscountAmount: '₹ 375',
    BusType: 'Express',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_2",
    AcNonAc: 'BusFlatlistData_AcNonAc_1',
    Date: '20 July 2022',
    DiscountAmount: '₹ 150',
    BusType: 'Express',
  },
  {
    id: 1,
    TravelCompany: "BusFlatlistData_TravelCompany_3",
    AcNonAc: 'BusFlatlistData_AcNonAc_1',
    Date: '20 June 2022',
    DiscountAmount: '₹ 360',
    BusType: 'Luxury',
  },
]

export const Paymentdata = [
  {
    "id": 1,
    "paymentparegraph": "Paymentdata_paymentparegraph_1",
    "image": images.Upi,
    "smalltext": 'Pay_Via_UPI',
    "walletstextset": 'Wallets',
  },
  {
    "id": 2,
    "paymentparegraph": "Paymentdata_paymentparegraph_2",
    "image": images.paytem,
    "smalltext": 'Paytm',
  },
  {
    "id": 3,
    "paymentparegraph": "Paymentdata_paymentparegraph_3",
    "image": images.Mobikwikimage,
    "smalltext": 'MobikWik',
  },
  {
    "id": 4,
    "paymentparegraph": "Paymentdata_paymentparegraph_4",
    "image": images.freechargelogo,
    "smalltext": 'Freecharge',
  },
]

export const TicketPersonData = [
  {
    "id": 1,
    "paymentparegraph": "12_Years",
    "smalltext": "Adults",
  },
  {
    "id": 2,
    "paymentparegraph": "212years",
    "smalltext": 'Children',
  },
  {
    "id": 3,
    "paymentparegraph": "Infants",
    "smalltext": '02Years',
  },
]