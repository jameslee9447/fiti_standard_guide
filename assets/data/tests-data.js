// ============================================================
// 자동차 내장재 시험 표준 가이드 데이터
// 추후 다른 브랜드/표준 추가 시 이 파일에 데이터를 추가하면 됩니다.
// ============================================================

const TESTS_DATA = {
  // ─────────────────────────────────────────
  // 르노 (Renault)
  // ─────────────────────────────────────────
  renault: {
    id: "renault",
    name: { ko: "르노", en: "Renault" },
    fullName: { ko: "르노 Audit 시험가이드", en: "Renault Audit Testing Guide" },
    type: "brand",
    categories: {
      surface: {
        id: "surface",
        name: { ko: "표면검사", en: "Surface Inspection" },
        roman: "Ⅰ",
        tests: [
          {
            id: "grey-scale",
            image: "assets/img/tests/renault/grey-scale.jpg",
            name: { ko: "Grey Scale", en: "Grey Scale" },
            sub: { ko: "그레이 스케일", en: "Grey Scale" },
            overview: {
              ko: "변색이나 퇴색의 정도를 표준광원(D65) 아래에서 표준회색표와 비교하여 육안판정 후 등급을 정하는 시험",
              en: "A test that determines the grade after visual judgment by comparing the degree of discoloration or fading with a standard grey scale under a standard light source (D65)."
            },
            sample: { ko: "50 mm × 50 mm 이상", en: "50 mm × 50 mm or larger" },
            equipment: { ko: "Macbeth D65 표준광원 장비", en: "Macbeth D65 Standard Light Source" },
            method: {
              ko: "Macbeth에 있는 D65-6500k 광원 아래에서 시편을 검사대에 올려놓고, 표준회색표와 비교하여 등급(Grade) 판정",
              en: "Place the specimen on the inspection table under the D65-6500k light source in Macbeth and compare with the standard grey scale to determine the grade."
            },
            result: { ko: "Grade 5, 4-5, 4, 3-4, 3, 2-3, 2, 1-2, 1", en: "Grade 5, 4-5, 4, 3-4, 3, 2-3, 2, 1-2, 1" },
            standard: "Renault D15 1343, DIN EN 20105-A02"
          },
          {
            id: "color-variation",
            image: "assets/img/tests/renault/color-variation.jpg",
            name: { ko: "색, 색차", en: "Colour Point, Colour Variation" },
            sub: { ko: "색상 측정", en: "Colour Measurement" },
            overview: {
              ko: "색은 CIE 1796 (L*a*b*) 색공간에서 1개의 점으로 표현하는 시험, 색차는 위 색공간에서 색의 변화를 2점의 거리로 표현하는 시험",
              en: "Colour is expressed as a single point in the CIE 1796 (L*a*b*) colour space; colour variation is expressed as the distance between two points in the same colour space."
            },
            sample: { ko: "50 mm × 50 mm 이상", en: "50 mm × 50 mm or larger" },
            equipment: { ko: "Datacolor 색차측정기", en: "Datacolor Spectrophotometer" },
            method: {
              ko: "광원은 D65, 시야각은 2°, 측정방식(조명/수광)은 d/8°으로 측정",
              en: "Measured with light source D65, viewing angle 2°, and measurement method (illumination/reception) d/8°."
            },
            result: { ko: "L*, a*, b*, △L*, △a*, △b*, △E, △C, △H", en: "L*, a*, b*, △L*, △a*, △b*, △E, △C, △H" },
            standard: "Renault D15 5083, Renault D17 1736"
          },
          {
            id: "sclerometer",
            image: "assets/img/tests/renault/sclerometer.jpg",
            name: { ko: "에릭슨 SCLEROMETER 스크래치", en: "Tearing resistance by Sclerometer" },
            sub: { ko: "스크래치 시험", en: "Scratch Test" },
            overview: {
              ko: "에릭슨 Sclerometer 스크래치 장비를 사용하여 시험편에 스크래치를 낸 후에 표면에 있는 자국의 모양을 판정하는 시험",
              en: "A test that determines the shape of marks on the surface after scratching the specimen using the Erichsen Sclerometer equipment."
            },
            sample: { ko: "50 mm × 50 mm 이상", en: "50 mm × 50 mm or larger" },
            equipment: { ko: "에릭슨 Sclerometer 스크래치 Type 318S", en: "Erichsen Sclerometer Scratch Type 318S" },
            method: {
              ko: "(0~3)N은 파랑색 스프링, (0~10)N은 빨간색 스프링, (0~20)N은 노란색 스프링을 사용. 필요한 힘을 가하고 나사를 사용하여 잠근 후 방향 별 2~5cm 길이의 선을 그어 결과 판정",
              en: "Use blue spring for (0–3)N, red spring for (0–10)N, yellow spring for (0–20)N. Apply the required force, lock with screws, and draw 2–5 cm lines in each direction for evaluation."
            },
            result: {
              ko: "No mark / Surface marking / Penetration without tearing / Tears / Exfoliation",
              en: "No mark / Surface marking / Penetration without tearing / Tears / Exfoliation"
            },
            standard: "Renault D21 3092"
          },
          {
            id: "cross-scalpel",
            image: "assets/img/tests/renault/cross-scalpel.jpg",
            name: { ko: "CROSS SCALPEL", en: "Cross Scalpel" },
            sub: { ko: "크로스 스칼펠", en: "Cross Scalpel" },
            overview: {
              ko: "Scalpel 장비로 컷팅하여 플라스틱 코팅된 정도를 판정하는 시험",
              en: "A test that determines the degree of plastic coating by cutting with a scalpel."
            },
            sample: { ko: "50 mm × 50 mm 이상", en: "50 mm × 50 mm or larger" },
            equipment: { ko: "SCALPEL", en: "SCALPEL" },
            method: {
              ko: "St. Andrew cross 모양으로 컷팅한 후에 플라스틱 소재 위의 코팅을 떼어내고 벗겨진 길이를 측정",
              en: "After cutting in a St. Andrew cross shape, peel off the coating on the plastic material and measure the peeled length."
            },
            result: {
              ko: "벗겨짐 없음 - 0 / 1mm 미만 - 1 / 1~2mm - 2 / 2~3mm - 3 / 3~5mm - 4 / 5mm 초과 - 5",
              en: "No peel - 0 / Less than 1mm - 1 / 1~2mm - 2 / 2~3mm - 3 / 3~5mm - 4 / Over 5mm - 5"
            },
            standard: "Renault D21 3093"
          },
          {
            id: "gloss",
            image: "assets/img/tests/renault/gloss.jpg",
            name: { ko: "광택", en: "Gloss" },
            sub: { ko: "광택 측정", en: "Gloss Measurement" },
            overview: {
              ko: "광택 측정기를 사용하여 20°, 60°, 85°의 입사각에서 정반사 광택을 측정하는 시험",
              en: "A test that measures specular gloss at 20°, 60°, and 85° angles of incidence using a gloss meter."
            },
            sample: { ko: "50 mm × 100 mm 이상", en: "50 mm × 100 mm or larger" },
            equipment: { ko: "BYK 광택 측정기", en: "BYK Gloss Meter" },
            method: {
              ko: "표준시편으로 Calibration을 한 후 측정각도를 선택하고 광택을 측정. 60°는 기본, 20°는 60°에서 70 초과 시, 85°는 무광택(Matt) 측정 시 사용",
              en: "After calibration with a standard specimen, select the measurement angle and measure gloss. 60° is the default, 20° is used for values over 70 at 60°, and 85° is used for matt specimens."
            },
            result: { ko: "광택값 U.G. (Unit of Gloss)", en: "Gloss value U.G. (Unit of Gloss)" },
            standard: "Renault D25 1413"
          },
          {
            id: "water-stain",
            image: "assets/img/tests/renault/water-stain.jpg",
            name: { ko: "물방울 견뢰도", en: "Stain with Water or Other" },
            sub: { ko: "물방울 견뢰도", en: "Water Drop Fastness" },
            overview: { ko: "물(또는 기타 액체)에 의한 얼룩을 평가하는 시험", en: "A test that evaluates stains caused by water (or other liquids)." },
            sample: { ko: "100 mm × 40 mm, 3개", en: "100 mm × 40 mm, 3 pieces" },
            equipment: { ko: "물방울 견뢰도 시험 도구", en: "Water Drop Fastness Test Tool" },
            method: {
              ko: "시편에 정해진 물(또는 기타 액체)를 떨어뜨린 후, 지정된 조건으로 건조시키고 Grey Scale을 측정",
              en: "After dropping the specified water (or other liquid) on the specimen, dry under specified conditions and measure the Grey Scale."
            },
            result: { ko: "외관, Grey Scale (급)", en: "Appearance, Grey Scale (grade)" },
            standard: "Renault D47 1005"
          },
          {
            id: "friction",
            image: "assets/img/tests/renault/friction.jpg",
            name: { ko: "마찰견뢰도", en: "Friction by Crockmeter" },
            sub: { ko: "마찰 시험", en: "Friction Test" },
            overview: { ko: "마찰로 인한 색의 변화를 측정하는 시험", en: "A test that measures colour change due to friction." },
            sample: { ko: "50 mm × 140 mm, 10개", en: "50 mm × 140 mm, 10 pieces" },
            equipment: { ko: "Crockmeter", en: "Crockmeter" },
            method: {
              ko: "Dry, Soapy water, Technical Heptane, Ethanol, Acid Perspiration, Basic Perspiration 중 선택하여 마찰 시험을 진행",
              en: "Conduct friction test using one of: Dry, Soapy water, Technical Heptane, Ethanol, Acid Perspiration, Basic Perspiration."
            },
            result: { ko: "Grey Scale (급), Gloss Variation (UB)", en: "Grey Scale (grade), Gloss Variation (UB)" },
            standard: "RNES-B-00090 Method 2, Renault D45 1010"
          },
          {
            id: "colorfastness",
            image: "assets/img/tests/renault/colorfastness.jpg",
            name: { ko: "물, 해수, 땀 견뢰도", en: "Colorfastness to Water, Sea water, Sweat" },
            sub: { ko: "견뢰도 시험", en: "Colorfastness Test" },
            overview: { ko: "물, 해수, 땀에 의한 견뢰도를 평가하는 시험", en: "A test that evaluates fastness to water, sea water, and sweat." },
            sample: { ko: "100 mm × 40 mm, 3개", en: "100 mm × 40 mm, 3 pieces" },
            equipment: { ko: "견뢰도 시험기 + 오븐", en: "Colorfastness Tester + Oven" },
            method: {
              ko: "시편에 정해진 물, 해수, 땀액을 떨어뜨린 후, 지정된 조건으로 건조하고 Grey Scale 측정",
              en: "Drop specified water, sea water, or sweat solution on the specimen, dry under specified conditions, and measure Grey Scale."
            },
            result: { ko: "Grey Scale (급)", en: "Grey Scale (grade)" },
            standard: "Renault D47 1020"
          },
          {
            id: "soiling",
            image: "assets/img/tests/renault/soiling.jpg",
            name: { ko: "내오염성 및 세척성", en: "Soiling Resistance and Cleanability" },
            sub: { ko: "오염/세척 시험", en: "Soiling/Cleaning Test" },
            overview: {
              ko: "차량 탑승자가 장기간 접촉으로 인해 발생한 오염된 부분을 평가하고, 추가로 오염된 부분을 세척하여 평가",
              en: "Evaluates soiled areas caused by long-term contact with vehicle occupants, and additionally evaluates by cleaning the soiled areas."
            },
            sample: { ko: "100 mm × 240 mm, 3개", en: "100 mm × 240 mm, 3 pieces" },
            equipment: { ko: "Wear Device", en: "Wear Device" },
            method: {
              ko: "오염포(EMPA Reference 104), 하중 1000g, 13 RPM의 속도로 오염 후 Grey Scale 측정. 비눗물에 적신 천을 사용하여 얼룩을 세척한 후 Grey Scale을 다시 측정",
              en: "Soil with EMPA Reference 104 cloth, 1000g load, 13 RPM, then measure Grey Scale. Clean the stain with a cloth dampened in soapy water and measure Grey Scale again."
            },
            result: { ko: "Grey Scale (급)", en: "Grey Scale (grade)" },
            standard: "RENAULT D45 1817"
          },
          {
            id: "cross-cut",
            image: "assets/img/tests/renault/cross-cut.jpg",
            name: { ko: "Cross-Cut (크로스컷)", en: "Cross-cut" },
            sub: { ko: "크로스컷 시험", en: "Cross-cut Test" },
            overview: { ko: "코팅된 부분에 직각의 격자무늬로 절단하여 소지노출을 확인하는 시험", en: "A test that verifies substrate exposure by cutting the coated area in a right-angle grid pattern." },
            sample: { ko: "100 mm × 100 mm, 2개", en: "100 mm × 100 mm, 2 pieces" },
            equipment: { ko: "Cross-cut Guide, Cutter", en: "Cross-cut Guide, Cutter" },
            method: {
              ko: "Cross-cut Guide를 시료에 올려놓고 (1, 2, 3) mm 간격으로 절단한 후 테이프를 부착하여 5분 이내에 60도 각도로 뜯어내어 코팅이 떨어져 나가는지 확인",
              en: "Place the Cross-cut Guide on the specimen, cut at (1, 2, 3) mm intervals, attach tape, and within 5 minutes, peel off at a 60-degree angle to check if the coating comes off."
            },
            result: { ko: "Grade 0, 1, 2, 3, 4, 5", en: "Grade 0, 1, 2, 3, 4, 5" },
            standard: "ISO 2409"
          }
        ]
      },
      mechanical: {
        id: "mechanical",
        name: { ko: "기계적 특성", en: "Mechanical Properties" },
        roman: "Ⅱ",
        tests: [
          {
            id: "180-peeling",
            image: "assets/img/tests/renault/180-peeling.jpg",
            name: { ko: "180도 박리강도", en: "180° Peeling" },
            sub: { ko: "박리강도", en: "Peel Strength" },
            overview: { ko: "복합체를 180° 박리하는 데 필요한 하중을 측정하는 시험", en: "A test that measures the load required to peel a composite at 180°." },
            sample: { ko: "200 mm × 50 mm, 방향별 5개", en: "200 mm × 50 mm, 5 pieces per direction" },
            equipment: { ko: "UTM (Universal Testing Machine)", en: "UTM (Universal Testing Machine)" },
            method: {
              ko: "시험속도 100 mm/min으로 UTM을 작동하여 100 mm 구간에서의 평균 180° 박리강도를 측정",
              en: "Operate UTM at 100 mm/min and measure the average 180° peel strength over a 100 mm section."
            },
            result: { ko: "N", en: "N" },
            standard: "Renault D41 1015"
          },
          {
            id: "90-peeling",
            image: "assets/img/tests/renault/90-peeling.jpg",
            name: { ko: "90도 박리강도", en: "90° Peeling" },
            sub: { ko: "90도 박리강도", en: "90° Peel Strength" },
            overview: { ko: "90° 각도로 박리하는 데 필요한 하중을 측정하는 시험", en: "A test that measures the load required to peel at a 90° angle." },
            sample: { ko: "250 mm × 25 mm, 5개", en: "250 mm × 25 mm, 5 pieces" },
            equipment: { ko: "UTM + 90° 박리 지그", en: "UTM + 90° Peel Jig" },
            method: {
              ko: "시험속도 100 mm/min으로 UTM에 90° 각도로 박리할 수 있는 지그를 설치하여 100 mm 구간에서의 평균 박리강도를 측정. 노화처리 후 시험도 가능",
              en: "Install a jig that can peel at a 90° angle on the UTM at 100 mm/min and measure the average peel strength over a 100 mm section. Testing after aging is also possible."
            },
            result: { ko: "N/cm", en: "N/cm" },
            standard: "Renault D51 1485"
          },
          {
            id: "tensile",
            image: "assets/img/tests/renault/tensile.jpg",
            name: { ko: "인장강도, 신율", en: "Tensile Strength, Elongation" },
            sub: { ko: "인장 시험", en: "Tensile Test" },
            overview: { ko: "직물, 코팅원단, 가죽 등의 인장특성을 측정하는 시험", en: "A test that measures the tensile properties of fabrics, coated fabrics, leather, etc." },
            sample: { ko: "300 mm × 50 mm, 방향별 5개", en: "300 mm × 50 mm, 5 pieces per direction" },
            equipment: { ko: "UTM", en: "UTM" },
            method: {
              ko: "시험속도 100 mm/min으로 UTM 작동하여 측정. Dry test: 23℃±2℃, 50%±5% R.H.에서 24h 처리 후 / Wet test: 23℃±2℃ 항온조에 2h±5min 처리 후",
              en: "Operate UTM at 100 mm/min. Dry test: condition at 23℃±2℃, 50%±5% R.H. for 24h / Wet test: immerse in 23℃±2℃ bath for 2h±5min."
            },
            result: { ko: "daN, %", en: "daN, %" },
            standard: "Renault D41 1029"
          },
          {
            id: "tensile-stitch",
            image: "assets/img/tests/renault/tensile-stitch.jpg",
            name: { ko: "봉제후 인장강도", en: "Tensile Resistance after Thread Stitching" },
            sub: { ko: "봉제 인장 시험", en: "Stitched Tensile Test" },
            overview: { ko: "직물, 편물에 봉제를 진행한 후, 인장시험으로 파괴될 때까지 강도를 측정", en: "After stitching fabric or knit, measure the strength until breakage by tensile test." },
            sample: { ko: "500 mm × 300 mm, 방향별 10개", en: "500 mm × 300 mm, 10 pieces per direction" },
            equipment: { ko: "UTM", en: "UTM" },
            method: {
              ko: "시험속도 100 mm/min으로 UTM 작동. Sewing 조건: Needle 110 metric ball point, Stitch 거리 2mm",
              en: "Operate UTM at 100 mm/min. Sewing conditions: Needle 110 metric ball point, Stitch distance 2mm."
            },
            result: { ko: "N", en: "N" },
            standard: "Renault D41 1065"
          },
          {
            id: "punching",
            image: "assets/img/tests/renault/punching.jpg",
            name: { ko: "꿰뚫림 강도", en: "Resistance to Punching" },
            sub: { ko: "꿰뚫림 시험", en: "Punching Test" },
            overview: { ko: "원통형 펀치를 이용하여 시편 가운데를 꿰뚫었을 때 최대하중을 측정하는 시험", en: "A test that measures the maximum load when piercing the center of a specimen with a cylindrical punch." },
            sample: { ko: "50 mm × 50 mm, 10개", en: "50 mm × 50 mm, 10 pieces" },
            equipment: { ko: "UTM + 펀치 봉 (직경 6mm, 길이 50mm)", en: "UTM + Punch Rod (diameter 6mm, length 50mm)" },
            method: {
              ko: "시험편을 홀더에 평평하게 고정한 후, 직경 6mm 길이 약 50mm의 봉을 사용하여 시험속도 30 mm/min으로 꿰뚫림강도를 측정",
              en: "Fix the specimen flat in the holder, then measure the punching strength at 30 mm/min using a rod of 6mm diameter and approximately 50mm length."
            },
            result: { ko: "N", en: "N" },
            standard: "Renault D41 1097"
          },
          {
            id: "leather-tear",
            image: "assets/img/tests/renault/leather-tear.jpg",
            name: { ko: "가죽 인열강도", en: "Leathers Tearing" },
            sub: { ko: "가죽 인열 시험", en: "Leather Tear Test" },
            overview: {
              ko: "가죽 및 코팅원단의 인열강도를 측정하는 시험. 시험편 형태는 \"Trouser\" 타입의 직사각형 육면체",
              en: "A test that measures the tear strength of leather and coated fabrics. Specimen is a rectangular \"Trouser\" type."
            },
            sample: { ko: "200 mm × 50 mm, 방향별 5개", en: "200 mm × 50 mm, 5 pieces per direction" },
            equipment: { ko: "UTM", en: "UTM" },
            method: {
              ko: "시험속도 100 mm/min으로 UTM 작동하여 인열강도를 측정. 100mm 혹은 최소 30mm 이상 구간에서 피크값을 구함",
              en: "Operate UTM at 100 mm/min and measure tear strength. Obtain peak value over a 100mm or minimum 30mm section."
            },
            result: { ko: "N", en: "N" },
            standard: "Renault D41 1126"
          },
          {
            id: "dolly-tear",
            image: "assets/img/tests/renault/dolly-tear.jpg",
            name: { ko: "DOLLY 인열강도", en: "Dolly Tearing Resistance" },
            sub: { ko: "Dolly 인열 시험", en: "Dolly Tear Test" },
            overview: { ko: "시편에 구멍을 내고 막대를 넣어 시편의 인열강도를 측정하는 시험", en: "A test that measures the tear strength by making a hole in the specimen and inserting a rod." },
            sample: { ko: "50 mm × 100 mm, 방향별 5개", en: "50 mm × 100 mm, 5 pieces per direction" },
            equipment: { ko: "UTM + Dolly 지그", en: "UTM + Dolly Jig" },
            method: {
              ko: "철의 봉(Steel Rod)을 시편 끝단에서 25mm 떨어진 지점에 삽입하여 시험속도 100 mm/min으로 UTM 작동하여 인열강도를 측정",
              en: "Insert a steel rod at a point 25mm from the end of the specimen and operate UTM at 100 mm/min to measure tear strength."
            },
            result: { ko: "N", en: "N" },
            standard: "Renault D41 1286"
          },
          {
            id: "foam-tear",
            image: "assets/img/tests/renault/foam-tear.jpg",
            name: { ko: "폼 인열강도", en: "Cellular Materials Tear Strength" },
            sub: { ko: "폼 인열 시험", en: "Foam Tear Test" },
            overview: {
              ko: "셀룰러 재질의 인열강도를 측정하는 시험. 시험편 형태는 \"Trouser\" 타입의 직사각형 육면체",
              en: "A test that measures the tear strength of cellular materials. Specimen is a rectangular \"Trouser\" type."
            },
            sample: { ko: "125 mm × 25 mm, 방향별 5개", en: "125 mm × 25 mm, 5 pieces per direction" },
            equipment: { ko: "UTM", en: "UTM" },
            method: {
              ko: "시험속도 50 mm/min으로 UTM 작동. 30mm 이상의 구간에서의 평균 힘을 두께로 나누어 인열강도를 계산. 인열 구간이 30mm 미만인 경우 새로운 시험편으로 시험",
              en: "Operate UTM at 50 mm/min. Calculate tear strength by dividing the average force over a section of 30mm or more by the thickness. If the tear section is less than 30mm, use a new specimen."
            },
            result: { ko: "N/m", en: "N/m" },
            standard: "Renault D41 1048"
          },
          {
            id: "foam-permanent-set",
            image: "assets/img/tests/renault/foam-permanent-set.jpg",
            name: { ko: "폼 영구압축", en: "Cellular Materials Permanent Set" },
            sub: { ko: "폼 영구압축 시험", en: "Foam Permanent Set Test" },
            overview: {
              ko: "셀룰러 재질의 영구압축을 측정하는 시험. 정해진 온도, 시간에 시편을 압축 및 회복하여 두께변형을 측정",
              en: "A test that measures the permanent set of cellular materials. The specimen is compressed and recovered at a specified temperature and time to measure thickness deformation."
            },
            sample: { ko: "25 mm × 25 mm × 6 mm 이상, 3개", en: "25 mm × 25 mm × 6 mm or larger, 3 pieces" },
            equipment: { ko: "영구압축 지그", en: "Permanent Set Jig" },
            method: {
              ko: "정해진 압력으로 두께 측정 후 일정비율(일반적으로 50%)로 시편을 압축. 조건: (40±2)℃ 22h, (70±2)℃ 22h, (100±2)℃ 70h, (150±2)℃ 70h",
              en: "Measure thickness at specified pressure, then compress the specimen at a fixed ratio (typically 50%). Conditions: (40±2)℃ 22h, (70±2)℃ 22h, (100±2)℃ 70h, (150±2)℃ 70h."
            },
            result: { ko: "%", en: "%" },
            standard: "Renault D41 1540"
          },
          {
            id: "foam-density",
            image: "assets/img/tests/renault/foam-density.jpg",
            name: { ko: "폼 밀도", en: "Cellular Materials Apparent Density" },
            sub: { ko: "폼 밀도 측정", en: "Foam Density Measurement" },
            overview: { ko: "셀룰러 재질의 밀도를 측정하는 시험", en: "A test that measures the density of cellular materials." },
            sample: { ko: "100 mm × 100 mm, 3개", en: "100 mm × 100 mm, 3 pieces" },
            equipment: { ko: "정밀저울", en: "Precision Balance" },
            method: { ko: "시편의 부피와 무게를 측정하여 밀도를 구함", en: "Measure the volume and weight of the specimen to calculate density." },
            result: { ko: "kg/m³", en: "kg/m³" },
            standard: "Renault D45 1045"
          },
          {
            id: "fabric-density",
            image: "assets/img/tests/renault/fabric-density.jpg",
            name: { ko: "원단밀도", en: "Number of Threads per Unit Length" },
            sub: { ko: "원단밀도 측정", en: "Fabric Density Measurement" },
            overview: { ko: "시편의 단위길이(cm)당 실의 올 수를 측정하는 시험", en: "A test that measures the number of threads per unit length (cm) of the specimen." },
            sample: { ko: "50 mm × 50 mm, 3개", en: "50 mm × 50 mm, 3 pieces" },
            equipment: { ko: "Counting Glass (분해경)", en: "Counting Glass" },
            method: { ko: "원단을 평평한 표면에 올려놓고, 분해경으로 실의 올 수를 측정", en: "Place the fabric on a flat surface and count the number of threads using the counting glass." },
            result: { ko: "threads/cm", en: "threads/cm" },
            standard: "NF EN 1049-2 Method B, ISO 7211-2, Renault D45 1014"
          },
          {
            id: "width",
            image: "assets/img/tests/renault/width.jpg",
            name: { ko: "폭", en: "Measure of the Strip" },
            sub: { ko: "폭 측정", en: "Width Measurement" },
            overview: { ko: "롤러로 공급되는 원단의 스트립을 측정하기 위한 시험", en: "A test to measure the strip of fabric supplied by rollers." },
            sample: { ko: "50 mm × 50 mm, 3개", en: "50 mm × 50 mm, 3 pieces" },
            equipment: { ko: "T형 자", en: "T-square Ruler" },
            method: {
              ko: "T형 자에 원단을 평행하게 올려놓고, 셀비지를 따라 한쪽 면을 정렬. 자를 반대쪽 셀비지에 올려두어 셀비지 사이의 거리를 측정",
              en: "Place the fabric parallel on the T-square, align one side along the selvedge. Place the ruler on the opposite selvedge to measure the distance between selvedges."
            },
            result: { ko: "mm", en: "mm" },
            standard: "NF EN 1773, Renault D45 1028"
          },
          {
            id: "thickness",
            image: "assets/img/tests/renault/thickness.jpg",
            name: { ko: "두께", en: "Thickness" },
            sub: { ko: "두께 측정", en: "Thickness Measurement" },
            overview: { ko: "시트(Sheet) 형태의 재료 두께를 평가하는 시험", en: "A test that evaluates the thickness of sheet-form materials." },
            sample: { ko: "100 mm × 100 mm, 5개", en: "100 mm × 100 mm, 5 pieces" },
            equipment: { ko: "다이얼게이지, 광학 장치", en: "Dial Gauge, Optical Device" },
            method: {
              ko: "Method A: 다이얼게이지 직경 10mm, 압력 (10±2) kPa으로 측정 / Method B: 광학 장치를 이용하여 필요한 층의 두께를 측정",
              en: "Method A: Measure with dial gauge diameter 10mm, pressure (10±2) kPa / Method B: Measure thickness of required layer using optical device."
            },
            result: { ko: "mm", en: "mm" },
            standard: "Renault D41 1013"
          },
          {
            id: "thickness-compress",
            image: "assets/img/tests/renault/thickness-compress.jpg",
            name: { ko: "두께와 압축성", en: "Thickness and Compressibility" },
            sub: { ko: "두께/압축성 측정", en: "Thickness/Compressibility Measurement" },
            overview: { ko: "유연한(Flexible) 형태의 재료 두께와 압축성을 평가하는 시험", en: "A test that evaluates the thickness and compressibility of flexible materials." },
            sample: { ko: "100 mm × 100 mm, 5개", en: "100 mm × 100 mm, 5 pieces" },
            equipment: { ko: "두께측정기", en: "Thickness Gauge" },
            method: {
              ko: "아세톤 종류의 용매로 코팅부분 분리 가능. 두께 측정은 다이얼게이지 직경 50mm, 압력 (1, 5, 10, 50, 100) hPa 조건으로 측정",
              en: "Coating can be separated using acetone-type solvents. Thickness is measured with dial gauge diameter 50mm at pressures (1, 5, 10, 50, 100) hPa."
            },
            result: { ko: "mm", en: "mm" },
            standard: "Renault D45 1195"
          },
          {
            id: "bias-error",
            image: "assets/img/tests/renault/bias-error.jpg",
            name: { ko: "오차", en: "Bias, Slack, Thread Direction Fault" },
            sub: { ko: "원단 오차 측정", en: "Fabric Bias Measurement" },
            overview: { ko: "원단 제조과정에서 장력이 고르지 않게 분포되어 발생하는 오차 측정", en: "Measures errors that occur due to uneven tension distribution during fabric manufacturing." },
            sample: { ko: "1000 mm × 500 mm, 3개", en: "1000 mm × 500 mm, 3 pieces" },
            equipment: { ko: "Counting Glass", en: "Counting Glass" },
            method: {
              ko: "위사(Weft)방향의 Bias오차 및 Slack오차, 경사(Warp)방향의 오차를 측정. Bias/Slack: A/B × 100 (%), Warp: A (cm)",
              en: "Measure Bias and Slack errors in weft direction, and Warp direction error. Bias/Slack: A/B × 100 (%), Warp: A (cm)."
            },
            result: { ko: "%, cm", en: "%, cm" },
            standard: "Renault D45 5269"
          },
          {
            id: "weight-area",
            image: "assets/img/tests/renault/weight-area.jpg",
            name: { ko: "단위면적중량", en: "Weight per Unit Area" },
            sub: { ko: "면적당 중량", en: "Weight per Area" },
            overview: { ko: "시편의 면적당 중량을 측정하는 시험", en: "A test that measures the weight per area of the specimen." },
            sample: { ko: "250 mm × 250 mm, 5개", en: "250 mm × 250 mm, 5 pieces" },
            equipment: { ko: "정밀저울", en: "Precision Balance" },
            method: { ko: "시험편의 중량을 측정하여 단위면적으로 나눔", en: "Measure the weight of the specimen and divide by unit area." },
            result: { ko: "g/m²", en: "g/m²" },
            standard: "RNES-B-20083, Renault D45 1012"
          },
          {
            id: "mass-meter",
            image: "assets/img/tests/renault/mass-meter.jpg",
            name: { ko: "미터중량", en: "Mass per Meter" },
            sub: { ko: "미터당 중량", en: "Mass per Meter" },
            overview: { ko: "시편의 단위미터당 중량을 측정하는 시험", en: "A test that measures the weight per meter of the specimen." },
            sample: { ko: "1000 mm × 20 mm, 5개", en: "1000 mm × 20 mm, 5 pieces" },
            equipment: { ko: "전자저울", en: "Electronic Balance" },
            method: {
              ko: "시편의 정확한 길이를 측정하고, 길이를 m단위로 기록. 저울을 사용하여 각 표본의 무게를 측정하여 길이로 나눔",
              en: "Measure the exact length of the specimen, record in meters. Measure the weight of each sample using a balance and divide by length."
            },
            result: { ko: "g/m", en: "g/m" },
            standard: "Renault D45 1228"
          },
          {
            id: "flexibility",
            image: "assets/img/tests/renault/flexibility.jpg",
            name: { ko: "유연성", en: "Flexibility" },
            sub: { ko: "유연성 측정", en: "Flexibility Measurement" },
            overview: { ko: "원단, 가죽 재료의 유연성을 계산하기 위한 시험", en: "A test to calculate the flexibility of fabric and leather materials." },
            sample: { ko: "100 mm × 270 mm, 방향별 3개", en: "100 mm × 270 mm, 3 pieces per direction" },
            equipment: { ko: "유연성 측정 지그", en: "Flexibility Test Jig" },
            method: {
              ko: "고정된 지그에 시편을 놓고 루프를 만들고, 접하는 두 개의 수평면과 수직면 사이의 거리를 각각 측정하여 유연성을 계산",
              en: "Place the specimen on a fixed jig, form a loop, and measure the distance between the two tangent horizontal and vertical planes to calculate flexibility."
            },
            result: { ko: "수평면 거리(b)와 수직면 거리(a)의 비율", en: "Ratio of horizontal plane distance (b) to vertical plane distance (a)" },
            standard: "Renault D45 1030"
          },
          {
            id: "plastic-density",
            image: "assets/img/tests/renault/plastic-density.jpg",
            name: { ko: "플라스틱 밀도", en: "Density of Plastic" },
            sub: { ko: "플라스틱 밀도 측정", en: "Plastic Density Measurement" },
            overview: { ko: "플라스틱 또는 펠릿 형태의 시편의 밀도를 측정하는 시험", en: "A test that measures the density of plastic or pellet form specimens." },
            sample: { ko: "250 mm × 250 mm, 2개", en: "250 mm × 250 mm, 2 pieces" },
            equipment: { ko: "정밀저울", en: "Precision Balance" },
            method: { ko: "플라스틱 또는 펠릿 형태의 시편을 물에 침지하여 밀도를 측정", en: "Immerse plastic or pellet specimens in water to measure density." },
            result: { ko: "g/cm³", en: "g/cm³" },
            standard: "ISO 1183-1"
          },
          {
            id: "mfr",
            image: "assets/img/tests/renault/mfr.jpg",
            name: { ko: "용융흐름지수", en: "Mass Flow Rate" },
            sub: { ko: "MFR 측정", en: "MFR Measurement" },
            overview: { ko: "플라스틱 펠릿 형태의 시편을 특정 조건에서 녹아 흘러가는 양 측정", en: "Measures the amount of plastic pellets melted and flowing under specific conditions." },
            sample: { ko: "플라스틱 펠릿 (3~7) g", en: "Plastic pellets (3~7) g" },
            equipment: { ko: "MFR (Melt Flow Rate) 시험기", en: "MFR (Melt Flow Rate) Tester" },
            method: {
              ko: "플라스틱 펠릿 형태의 시편을 얇은 관에 통과하여 흘러갈 수 있도록 하고, 10분간 특정온도, 하중에서 녹아 흘러가는 양을 측정",
              en: "Allow plastic pellets to flow through a thin tube, and measure the amount melted and flowing for 10 minutes at a specific temperature and load."
            },
            result: { ko: "g/10min", en: "g/10min" },
            standard: "ISO 1133-1"
          },
          {
            id: "hdt",
            image: "assets/img/tests/renault/hdt.jpg",
            name: { ko: "열변형온도", en: "Heat Deflection Temperature" },
            sub: { ko: "HDT 측정", en: "HDT Measurement" },
            overview: { ko: "플라스틱 시험편을 특정압력에서 구부러질 때의 온도를 측정", en: "Measures the temperature at which a plastic specimen deflects under a specific pressure." },
            sample: { ko: "플라스틱 80 mm × 10 mm × 4 mm", en: "Plastic 80 mm × 10 mm × 4 mm" },
            equipment: { ko: "HDT (Heat Deflection Temperature) 시험기", en: "HDT (Heat Deflection Temperature) Tester" },
            method: {
              ko: "(0.45, 1.80, 8.00) MPa 조건 하에서 일정하게 승온에 따라 변형이 발생하는 온도를 측정",
              en: "Measure the temperature at which deflection occurs as the temperature rises uniformly under conditions of (0.45, 1.80, 8.00) MPa."
            },
            result: { ko: "℃", en: "℃" },
            standard: "ISO 75-2"
          }
        ]
      },
      environmental: {
        id: "environmental",
        name: { ko: "내환경 처리", en: "Environmental Treatment" },
        roman: "Ⅲ",
        tests: [
          {
            id: "mercury-lamp",
            image: "assets/img/tests/renault/mercury-lamp.jpg",
            name: { ko: "수은램프", en: "Mercury Lamp Staining" },
            sub: { ko: "수은램프 시험", en: "Mercury Lamp Test" },
            overview: { ko: "수은램프(Mercury Lamp) 자외선에 노출시켜 외관이나 변색 평가", en: "Evaluates appearance and discoloration by exposing to mercury lamp UV." },
            sample: { ko: "100 mm × 100 mm 이상", en: "100 mm × 100 mm or larger" },
            equipment: { ko: "SUNLAMP TESTER", en: "SUNLAMP TESTER" },
            method: {
              ko: "의뢰자가 제공한 오염물질(Donor)을 시편(Receiver)에 접촉시키거나 호일에 감싸 전 처리한 시편을 오븐에 넣고 열 노화 처리한 후에 수은램프 자외선에 노출",
              en: "Contact the contaminant (Donor) provided by the client with the specimen (Receiver) or wrap in foil, then heat-age in the oven, and expose to mercury lamp UV."
            },
            result: { ko: "외관, Grey Scale (급)", en: "Appearance, Grey Scale (grade)" },
            standard: "Renault D27 1465, Renault D47 1035, Renault D47 1199, Renault D47 1915"
          },
          {
            id: "light-resistance",
            image: "assets/img/tests/renault/light-resistance.jpg",
            name: { ko: "내광성", en: "Light Resistance" },
            sub: { ko: "내광성 시험", en: "Light Resistance Test" },
            overview: {
              ko: "직물, 바닥재, 플라스틱, 가죽, 부직포, 폼 등 자동차 부품이 빛과 열에 노출되었을 때 외관 및 변색을 평가",
              en: "Evaluates the appearance and discoloration when automotive parts such as fabrics, floor materials, plastics, leather, nonwovens, and foams are exposed to light and heat."
            },
            sample: { ko: "110 mm × 45 mm, 2개", en: "110 mm × 45 mm, 2 pieces" },
            equipment: { ko: "Atlas Ci3000+ (Xenon Arc)", en: "Atlas Ci3000+ (Xenon Arc)" },
            method: {
              ko: "광원: Xenon-Arc-Lamp / 필터: TYPE S Borosilicate(내측)/Sodalime(외측) / 조사조도: 1.4 W/㎡ at 420nm / 블랙스탠다드 온도: (100±2)℃ 또는 (72±2)℃ / 총 조사시간: 150~900시간",
              en: "Light source: Xenon-Arc-Lamp / Filter: TYPE S Borosilicate (inner)/Sodalime (outer) / Irradiance: 1.4 W/㎡ at 420nm / Black standard temperature: (100±2)℃ or (72±2)℃ / Total exposure: 150~900 hours."
            },
            result: { ko: "Grey Scale (급), 색차, 광택변화율(%), 외관", en: "Grey Scale (grade), Colour difference, Gloss change rate (%), Appearance" },
            standard: "RNES-B-20085 Method 3, Renault D47 1431, Renault D47 1122"
          },
          {
            id: "weatherability",
            image: "assets/img/tests/renault/weatherability.jpg",
            name: { ko: "내후성", en: "Weatherability Resistance" },
            sub: { ko: "내후성 시험", en: "Weatherability Test" },
            overview: { ko: "햇빛, 열, 비, 눈, 온습도, 기타조건에 노출되었을 때 외관 및 색상이 변화되는 정도를 평가하는 시험", en: "A test that evaluates the degree of change in appearance and colour when exposed to sunlight, heat, rain, snow, temperature/humidity, and other conditions." },
            sample: { ko: "110 mm × 45 mm, 2개", en: "110 mm × 45 mm, 2 pieces" },
            equipment: { ko: "내후성 시험기 (Xenon Arc)", en: "Weatherability Tester (Xenon Arc)" },
            method: {
              ko: "광원: Xenon-Arc-Lamp / 필터: TYPE S Borosilicate(내측/외측) / 조사조도: 0.55 W/㎡ at 340nm / 블랙판넬 온도: (70±2)℃ / Cycle: Light 102분 → Light+Spray 18분",
              en: "Light source: Xenon-Arc-Lamp / Filter: TYPE S Borosilicate (inner/outer) / Irradiance: 0.55 W/㎡ at 340nm / Black panel temperature: (70±2)℃ / Cycle: Light 102 min → Light+Spray 18 min."
            },
            result: { ko: "Grey Scale (급), 색차, 광택변화율(%), 외관", en: "Grey Scale (grade), Colour difference, Gloss change rate (%), Appearance" },
            standard: "RNES-B-00088 Method 1, Renault D27 1911"
          },
          {
            id: "accelerated-ageing",
            image: "assets/img/tests/renault/accelerated-ageing.jpg",
            name: { ko: "가속노화", en: "Accelerated Ageing" },
            sub: { ko: "가속노화 시험", en: "Accelerated Ageing Test" },
            overview: { ko: "온도, 습도, 부식 또는 시약과 같은 다양한 환경조건에 노출시켜 외관과 치수변화 및 기타 물리적 특성을 측정하는 시험", en: "A test that measures appearance, dimensional change, and other physical properties by exposing to various environmental conditions such as temperature, humidity, corrosion, or reagents." },
            sample: { ko: "250 mm × 250 mm, 2개", en: "250 mm × 250 mm, 2 pieces" },
            equipment: { ko: "내환경 CYCLE 챔버", en: "Environmental Cycle Chamber" },
            method: {
              ko: "조건: A(70℃), B(100℃), C(-20℃), D(85℃), E(-30℃), F(약품침지), H(70℃침수→-20℃), J(100℃→침수→-20℃), K(70℃,95%RH→-30℃), M(80℃,95%RH→-40℃), N(40℃,95%RH), R(55℃,95%RH), T(35℃,95%RH), S(55℃,95%RH→-40℃→\"T\")",
              en: "Conditions: A(70℃), B(100℃), C(-20℃), D(85℃), E(-30℃), F(chemical immersion), H(70℃ immersion→-20℃), J(100℃→immersion→-20℃), K(70℃,95%RH→-30℃), M(80℃,95%RH→-40℃), N(40℃,95%RH), R(55℃,95%RH), T(35℃,95%RH), S(55℃,95%RH→-40℃→\"T\")."
            },
            result: { ko: "변화율(%), 외관", en: "Change rate (%), Appearance" },
            standard: "Renault D47 1165"
          },
          {
            id: "heat-resistance",
            image: "assets/img/tests/renault/heat-resistance.jpg",
            name: { ko: "내열성", en: "Subjected to Heat" },
            sub: { ko: "내열성 시험", en: "Heat Resistance Test" },
            overview: { ko: "열의 작용을 받았을 때, 치수변화 및 외관변화를 측정하는 시험", en: "A test that measures dimensional and appearance changes when subjected to heat." },
            sample: { ko: "300 mm × 300 mm, 3개", en: "300 mm × 300 mm, 3 pieces" },
            equipment: { ko: "오븐 (Oven)", en: "Oven" },
            method: {
              ko: "시편을 오븐에 넣고 일정시간 노화를 진행, 컨디셔닝 룸에서 일정시간 방치한 후 치수변화 및 외관변화를 측정. 시편에 따라 신율변화 측정도 가능",
              en: "Age the specimen in the oven for a set time, then leave in the conditioning room and measure dimensional and appearance changes. Elongation change can also be measured depending on the specimen."
            },
            result: { ko: "%, 외관", en: "%, Appearance" },
            standard: "Renault D45 1139, Renault D47 1234, Renault D47 1850"
          },
          {
            id: "humidity-resistance",
            image: "assets/img/tests/renault/humidity-resistance.jpg",
            name: { ko: "내습성", en: "Subjected to Humidity" },
            sub: { ko: "내습성 시험", en: "Humidity Resistance Test" },
            overview: { ko: "습도의 작용을 받았을 때, 치수변화 및 외관변화를 측정하는 시험", en: "A test that measures dimensional and appearance changes when subjected to humidity." },
            sample: { ko: "500 mm × 500 mm, 2개", en: "500 mm × 500 mm, 2 pieces" },
            equipment: { ko: "온습도챔버, 오븐", en: "Temperature/Humidity Chamber, Oven" },
            method: {
              ko: "온습도챔버와 오븐에 넣고 각각 습한 조건, 건조한 조건을 싸이클로 노출시킨 후, 5분 이내에 치수변화 및 외관변화를 측정",
              en: "Cycle the specimen between humid and dry conditions in the temperature/humidity chamber and oven, then measure dimensional and appearance changes within 5 minutes."
            },
            result: { ko: "치수변화율(%), 외관", en: "Dimensional change rate (%), Appearance" },
            standard: "Renault D45 1564"
          },
          {
            id: "climatic-cycle",
            image: "assets/img/tests/renault/climatic-cycle.jpg",
            name: { ko: "내환경 CYCLE", en: "Ageing according to Climatic Cycle" },
            sub: { ko: "환경 사이클 시험", en: "Climatic Cycle Test" },
            overview: { ko: "자동차 부품이 주로 겪는 노화주기를 선택하여 노출시키고 외관과 치수변화, 물리적 특성을 측정하는 시험", en: "A test that exposes automotive parts to selected aging cycles and measures appearance, dimensional change, and physical properties." },
            sample: { ko: "250 mm × 250 mm, 2개", en: "250 mm × 250 mm, 2 pieces" },
            equipment: { ko: "내환경 CYCLE 챔버", en: "Environmental Cycle Chamber" },
            method: {
              ko: "Cycle 종류: A(40℃,95%RH→85℃), B(40℃,95%RH→100℃), C(85℃,95%RH→85℃), D(85℃,95%RH→100℃), E(40℃,95%RH→70℃), G(40℃,95%RH→110℃), H(85℃,95%RH→120℃), J(40℃,95%RH→85℃,95%RH), K(40℃,95%RH→23℃,50%RH), LF(38℃,95%RH→-30℃→70℃), M(55℃,95%RH→23℃,50%RH→85℃→23℃,50%RH), NF(55℃,95%RH→23℃,50%RH→-30℃→23℃,50%RH)",
              en: "Cycle types: A(40℃,95%RH→85℃), B(40℃,95%RH→100℃), C(85℃,95%RH→85℃), D(85℃,95%RH→100℃), E(40℃,95%RH→70℃), G(40℃,95%RH→110℃), H(85℃,95%RH→120℃), J(40℃,95%RH→85℃,95%RH), K(40℃,95%RH→23℃,50%RH), LF(38℃,95%RH→-30℃→70℃), M(55℃,95%RH→23℃,50%RH→85℃→23℃,50%RH), NF(55℃,95%RH→23℃,50%RH→-30℃→23℃,50%RH)."
            },
            result: { ko: "변화율(%), 외관", en: "Change rate (%), Appearance" },
            standard: "Renault D47 1309"
          }
        ]
      },
      flammability: {
        id: "flammability",
        name: { ko: "난연성 및 유해물질", en: "Flammability & Hazardous Substances" },
        roman: "Ⅳ",
        tests: [
          {
            id: "flammability-test",
            image: "assets/img/tests/renault/flammability-test.jpg",
            name: { ko: "연소성", en: "Flammability" },
            sub: { ko: "연소 시험", en: "Burning Test" },
            overview: { ko: "자동차 내장재의 수평 연소속도를 구하는 시험", en: "A test that determines the horizontal burning rate of automotive interior materials." },
            sample: { ko: "100 mm × 350 mm, 10개", en: "100 mm × 350 mm, 10 pieces" },
            equipment: { ko: "수평연소성 시험기", en: "Horizontal Flammability Tester" },
            method: {
              ko: "버너의 불꽃 높이를 38mm로 조절. 시험편의 표면이 아래로 가도록 하여 불꽃을 15초간 접염. 첫 번째 표선에서 시작하여 두 번째 표선까지의 연소속도를 측정. 노화(Ageing)처리 후 시험 진행도 가능",
              en: "Adjust the burner flame height to 38mm. Place the specimen surface facing down and apply flame for 15 seconds. Measure the burning rate from the first to the second mark. Testing after aging is also possible."
            },
            result: { ko: "Bstat (mm/min), Bmax (mm/min), Self-extinguishing, Non-combustible / Type (A, B, C, D1, D2, E)", en: "Bstat (mm/min), Bmax (mm/min), Self-extinguishing, Non-combustible / Type (A, B, C, D1, D2, E)" },
            standard: "RNES-B-00071, Renault D45 1333"
          },
          {
            id: "fogging",
            image: "assets/img/tests/renault/fogging.jpg",
            name: { ko: "FOGGING", en: "Fogging" },
            sub: { ko: "포깅 시험", en: "Fogging Test" },
            overview: { ko: "자동차 내장재(직물, 가죽, 연질PVC)의 휘발성분들이 유리창에 응축(응집)되는 현상을 평가하기 위해 고안된 시험", en: "A test designed to evaluate the condensation (aggregation) phenomenon of volatile components from automotive interior materials (fabrics, leather, soft PVC) on glass windows." },
            sample: { ko: "70 mm × 70 mm 이상", en: "70 mm × 70 mm or larger" },
            equipment: { ko: "FOGGING 시험기", en: "FOGGING Tester" },
            method: {
              ko: "방법 A (Photometric): 반사율 측정을 통해 유기성분의 휘발성을 평가 / 방법 B (Gravimetric): 알루미늄 호일의 시험 전/후 무게차이를 이용하여 응축물의 중량(mg)을 측정",
              en: "Method A (Photometric): Evaluate volatility of organic components through reflectance measurement / Method B (Gravimetric): Measure condensate weight (mg) by weight difference of aluminum foil before/after testing."
            },
            result: { ko: "F (%), mg", en: "F (%), mg" },
            standard: "RNES-B-00070, Renault D45 1727"
          }
        ]
      }
    }
  }
  // 추후 다른 브랜드/표준 추가 시 여기에 객체 추가
  // 예: hyundai: { ... }, iso: { ... }, astm: { ... }
};

// 전역으로 사용 가능하게 export
if (typeof window !== 'undefined') {
  window.TESTS_DATA = TESTS_DATA;
}
