import { createContext } from "react";

export const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {

  const movies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: "هو فيلم درامي أمريكي صدر عام 1994 كتبه وأخرجه فرانك دارابونت استنادًا إلى رواية قصيرة تُدعى ريتا هيوارث والخلاص من شوشانك لستيفن كينج صدرت عام 1982. تحكي الرواية قصة المصرفي آندي دوفرسن (أدى دوره تيم روبنز)، المحكوم عليه بالسجن المؤبد في سجن ولاية شاوشانك لقتله زوجته وعشيقها، على الرغم من زعمه براءته. وعلى مدى العقدين التاليين، صادق زميله في السجن، مهرب الممنوعات إليس «ريد» ريدنج (أدى دوره مورغان فريمان)، وأصبح له دور فعال في عملية غسيل الأموال التي قادها مأمور السجن صمويل نورتون (أدى دوره بوب جنتون). وقد ظهر ويليام سادلر وكلانسي براون وجيل بيلوز وجيمس ويتمور في الأدوار الثانوية في الفيلم.",
      category: "جريمة",
      image: "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"

    },

    {
      id: 2,
      title: 'Mowgli: Legend of the Jungle',
      description: "يُقرّر فتًى يتيم ترعاه الحيوانات في الأدغال ما سيكون عليه مصيره فيما هو يُواجه عدوًّا خطيرًا... وأصوله البشريّة",
      category: "مغامرات",
      image: "https://images.saymedia-content.com/.image/t_share/MTc0NDgzMzkyOTUwMTgzNTU4/mowgli-legend-of-the-jungle-2018-movie-review.jpg"

    },

    {
      id: 3,
      title: 'A Lot of Nothing 2022',
      description: "في إطار من الكوميديا والجريمة، يعيش جيمس وفانيسا حياة زوجية مثالية من النجاح والحب، ولكن تنقلب حياتهما تمامًا حينما يشهدا على جريمة قتل ارتكبها جارهما.",
      category: "اكشن",
      image: "https://cima4u2.quest/wp-content/uploads/01-1566.jpg"

    },

    {
      id: 4,
      title: 'UFO Sweden',
      description: "مراهقة متمردة وُضعت في الحضانة تشتبه في أن والدها لم يمت لكنه اختطف. إنها مصممة على معرفة الحقيقة بمساعدة جمعية UFO.",
      category: "خيال علمي",
      image: "https://cima4u2.quest/wp-content/uploads/0-11474.jpg"

    },

    {
      id: 5,
      title: 'Nightsiren',
      description: "",
      category: "دراما",
      image: "https://cima4u2.quest/wp-content/uploads/0-11468.jpg"

    },
    {
      id: 6,
      title: '65 2023',
      description: "تدور أحداث الفيلم حول رائد فضاء يهبط على كوكب غامض، فيكتشف أنه ليس وحيدًا علي الكوكب.",
      category: "اكشن",
      image: "https://cima4u2.quest/wp-content/uploads/0-11104.jpg"

    },

    {
      id: 7,
      title: 'Fogaréu',
      description: "بين الماضي الاستعماري والحداثة الساحقة للأعمال الزراعية ، تعد مدينة غوياس مسرح اللقاء بين فرناندا الشابة وجذورها السرية",
      category: "دراما",
      image: "https://cima4u2.quest/wp-content/uploads/01-1535.jpg"

    },

    {
      id: 8,
      title: 'Shazam! Fury of the Gods',
      description: "يستكمل العمل مغامرة المراهق بيلي، والذي يتحول إلى بطل خارق بالغ يُدعى شازام، ويجد نفسه في مواجهة مع الآلهة.",
      category: "اكشن",
      image: "https://cima4u2.quest/wp-content/uploads/0-11279.jpg"

    },

    {
      id: 9,
      title: 'The Seven Faces of Jane',
      description: "",
      category: "دراما",
      image: "https://cima4u2.quest/wp-content/uploads/01-1565.jpg"

    },

    {
      id: 10,
      title: 'Operation Nation',
      description: "تنشأ علاقة حبّ محظورة بين عضو في جماعة قومية في وناشطة يسارية شغوفة، الأمر الذي يؤول إلى سلسلة أحداث غير متوقعة.",
      category: "دراما",
      image: "https://cima4u2.quest/wp-content/uploads/01-1569.jpg"

    },

    {
      id: 11,
      title: 'Nightsiren',
      description: ",تدور أحداث الفيلم حول رائد فضاء يهبط على كوكب غامض، فيكتشف أنه ليس وحيدًا علي الكوكب.",
      category: "اكشن",
      image: "https://cima4u2.quest/wp-content/uploads/0-11468.jpg"

    },
  ]


  return <MoviesContext.Provider value={{ movies }}>
    {children}
  </MoviesContext.Provider>
}