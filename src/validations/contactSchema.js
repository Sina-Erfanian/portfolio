import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fullname: Yup.string().required("اسمتو بده دیگه"),
  email: Yup.string().email("ایمیلتو درست وارد کن").required("ایمیل اجباریه"),
  subject: Yup.string().required("موضوع رو بگو اجباریه"),
  message: Yup.string().required("متن پیام اجباریه بگو ببینم چته"),
  recaptcha: Yup.string().required("من ربات نیستم رو بزن :)"),
});
