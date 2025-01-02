/* eslint-disable no-irregular-whitespace */

import { Container, Row, Col } from "react-bootstrap";
import CostumBtn from "../Components/utils/costumBtn";

import video from "../videos/annualContracts.mp4";

import "../Styles/annualContracts.css";

const AnnualContracts = () => {
  return (
    <>
      <div className="setion2-video-background">
        <video autoPlay loop={true} muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}></Col>
        </Row>
        <div className="section-divider">
          <span>
            {" "}
            <i
              style={{ color: "#686f80" }}
              className="fa-solid fa-screwdriver-wrench ac-second-head-text"
            ></i>
          </span>
        </div>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="ac-second-div">
              <p className="ac-second-head-text">
                مزايا عقود الصيانة السنوية
                <i
                  style={{ color: "#686f80", marginRight: "7px" }}
                  className="fa-brands fa-slack ac-second-head-text"
                ></i>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              إجراء (4) زيارات دورية منتظمة، بمعدل زيارة واحدة كل ثلاثة أشهر،
              للتحقق من كفاءة وسلامة الكاميرات وأجهزة التسجيل.
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              تقديم تقرير مفصل للطرف الثاني يتضمن أي أعطال طارئة قد تظهر خلال
              فترة التغطية .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              تنفيذ الزيارات الطارئة المطلوبة من قبل المنشأة والتي تم إدراجها في
              العقد بناءً على طلبها .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              الالتزام بالتواجد والاستجابة خلال 48 ساعة في حال وقوع أي طارئ .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              متابعة مستمرة وتواصل شهري لتلبية احتياجات النظام وتحديثاته، إن
              وجدت .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              تدريب الموظف المعني (ممثل الطرف الثاني) أو من ينوب عنه على كيفية
              تشغيل وإدارة نظام المراقبة ومعالجة الأعطال الطارئة لحين وصول
              المختص من الطرف الأول .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              إرسال تقارير دورية عبر البريد الإلكتروني توضح حالة نظام المراقبة
              بعد كل زيارة .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              تقديم خصم بنسبة 30% على الأجور التشغيلية وخصم بنسبة 25% على جميع
              منتجات كاميرات المراقبة .
            </p>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-brands fa-slack"
              ></i>
              تنظيم وترتيب غرفة التحكم وضبط الأسلاك داخل الكابينة بطريقة منهجية
              ومرتبة .
            </p>
          </Col>
        </Row>
        <div className="section-divider">
          <span>
            {" "}
            <i
              style={{ color: "#686f80" }}
              className="fa-solid fa-screwdriver-wrench ac-second-head-text"
            ></i>
          </span>
        </div>

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="ac-second-div">
              <p className="ac-second-head-text">
                بنود وأحكام عقد الصيانة السنوي
                <i
                  style={{ color: "#686f80", marginRight: "7px" }}
                  className="fa-regular fa-file-lines ac-second-head-text"
                ></i>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              ​​البند(1) تعتبر المقدمة جزاء لا يتجزأ من هذا العقد
            </p>
            <div className="section-divider">
              <span>
                {" "}
                <i
                  style={{ color: "#686f80" }}
                  className="fa-regular fa-file-lines"
                ></i>
              </span>
            </div>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              البند (2) يتألف هذا العقد من الوثائق الآتية :
            </p>
            <p className="">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              أولا : وثيقة العقد الأساسية
            </p>
            <p>
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>{" "}
              ثانيا : الشروط العامة
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              ثالثا : بيان بكاميرات المراقبة وملحقاتها
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              رابعا : قيمة العقد تشكل هذه الوثائق وحدة متكاملة وتعد كل وثيقة
              منها جزءا من العقد بحيث تفسر وتتمم الوثائق المذكورة أعلاه بعضها
              بعضا .
            </p>
            <div className="section-divider">
              <span>
                {" "}
                <i
                  style={{ color: "#686f80" }}
                  className="fa-regular fa-file-lines"
                ></i>
              </span>
            </div>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              البند (3) الغرض من العقد هو تقديم خدمة صيانة كاميرات المراقبة في
              الموقع المتفق عليه مع الطرف الثاني ، وفقاً لما يتم الاتفاق عليه
              بموجب ملحق للعقد.
            </p>
            <div className="section-divider">
              <span>
                {" "}
                <i
                  style={{ color: "#686f80" }}
                  className="fa-regular fa-file-lines"
                ></i>
              </span>
            </div>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              البند (4) مدة العقد سنة واحدة، تبدأ من تاريخ العقد وتستمر حتى
              انتهاء المدة. وفي حال رغب الطرف الثاني في تجديد العقد أو إنهائه،
              يجب عليه إخطار الطرف الأول قبل شهر من انتهاء العقد.
            </p>
            <div className="section-divider">
              <span>
                {" "}
                <i
                  style={{ color: "#686f80" }}
                  className="fa-regular fa-file-lines"
                ></i>
              </span>
            </div>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              البند (5) التزامات الطرف الأول :
            </p>
            <p>
              {" "}
              1- يلتزم الطرف الأول بعمل زيارات للتأكد من عمل وسلامة الكاميرات
              وجهاز التسجيل مع تزويد الطرف الثاني بتقرير يشمل كافة الأعطال
              الطارئة ، وهي كالتالي :
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              أ- عدد (4) زيارات دورية رسمية / كل (3) اشهر زيارة .
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              ب- عدد زيارات اضطرارية حسب الموضح في جدول الزيارات الاضطرارية
              الموضحة في العقد .
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              2- يشعر الطرف الأول الطرف الثاني عن كل صيانة خلال فترة التعاقد
              وذلك بموجب فاتورة تقدر قيمتها على تقرير الأعطال .
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              3- الطرف الأول غير مسئول عن تلف أي من المواد المستخدمة أو ما يتعلق
              بالأجهزة جراء سوء الاستخدام .
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              4- لا يتحمل الطرف الأول أي تكاليف صيانة للأعطال الناتجة عن الأعطال
              الكهربائية أو الميكانيكية خارج نطاق العقد، ويتحمل الطرف الثاني
              كافة الأضرار الناتجة عن أعطال الكاميرات بسبب الأعطال الكهربائية أو
              غيرها.
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              5- يلتزم الطرف الأول بتدريب المختص (ممثل الطرف الثاني) أو من ينوب
              عنه على كيفية العمل مع برنامج كاميرات المراقبة والأعطال الطارئة
              لحين وصول الموظف المختص من الطرف الأول .
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              6-يقر الطرف الأول بأنه وقف على العين محل العقد وعاينها المعاينة
              اللازمة و النافية للجهالة .
            </p>
            <div className="section-divider">
              <span>
                {" "}
                <i
                  style={{ color: "#686f80" }}
                  className="fa-regular fa-file-lines"
                ></i>
              </span>
            </div>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              البند (6) التزامات الطرف الثاني :
            </p>{" "}
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              1- يتحمل الطرف الثاني تكاليف أجور الصيانة وقطع الغيار (مثل
              الوصلات، الشبكة، الكاميرات، جهاز المراقبة، وغيرها) وفقاً لعرض
              السعر المقدم من الطرف الأول، علماً بأن الأسعار قد تتغير حسب أسعار
              السوق، أو يمكن للطرف الثاني شراء هذه القطع على نفقته بموافقة الطرف
              الأول.
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              2- يلتزم الطرف الثاني بعدم القيام بأي صيانة خارجية بنفسه أو عبر أي
              طرف آخر، ويتحمل كافة الأضرار الناتجة عن ذلك.
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              3- يتعين على الطرف الثاني إبلاغ الطرف الأول فور حدوث أي عطل في
              النظام خلال ساعات دوام الطرف الأول، على أن يتم احتساب الزيارة ضمن
              الزيارات المحددة في البند (5-1).
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              4- سداد كامل قيمة عقد الصيانة مقدماً بنسبة 100% شامل القيمة
              المضافة .
            </p>
            <div className="section-divider">
              <span>
                {" "}
                <i
                  style={{ color: "#686f80" }}
                  className="fa-regular fa-file-lines"
                ></i>
              </span>
            </div>
            <p className="ac-text">
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-regular fa-file-lines"
              ></i>
              (7) الأحكام العامة :
            </p>{" "}
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              1- أي زيادة أو تعديل على أنظمة المراقبة الموجودة في المبنى سيكون
              له تكلفة مستقلة خارج نطاق هذا العقد، أو قد يتم تضمينه في ملحق
              للعقد مع تحديد قيمة العقد الجديد.
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              2- أي زيارة غير متفق عليها في العقد كما هو مبين في البند (5-1)
              ستكون قيمتها (250 ريال) للفحص الإضافي لنظام الكاميرات.
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              3-الالتزام من كل الطرفين بحسن النوايا وسير العمل على أكمل وجه .
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#686f80", marginLeft: "5px" }}
                className="fa-solid fa-feather-pointed"
              ></i>
              4- أي إخلال بأي بند من بنود التعاقد، يخضع الى الحلول الودية خلال
              (15 يوم) وفي حال عدم الوصول إلى تسوية نهائية تختص الجهات المختصة
              بالفصل في النزاع محل العقد
            </p>
          </Col>
        </Row>

        <a
          className="custom-link"
          href="https://zoomtechsa.odoo.com/shop/qd-syn-kmyrt-snwy-6644#attr=152435,152445,152456"
        >
          <CostumBtn text={"طلب إصدار عقد صيانة"} />
        </a>
      </Container>
    </>
  );
};

export default AnnualContracts;
