import "./style.sass";
import { MainButton } from "../Forms/Button";
import { Link } from "react-router-dom";
import imgFloat from "../../assets/img/float.jpg";

function FloatSection() {
  return (
    <div className="float-section">
      <div className="float-section__main">
        <div className="float-section__img">
          <img src={imgFloat} alt="" />
        </div>
        <p className="float-section_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          fugiat impedit, iure labore pariatur quia reiciendis reprehenderit?
          Ab, accusantium adipisci architecto culpa esse hic id ipsam itaque
          libero modi, nemo qui quibusdam quod saepe sequi soluta totam! Cumque
          cupiditate deleniti deserunt doloremque eum eveniet exercitationem,
          illo impedit in minus necessitatibus nemo odit officia omnis pariatur
          perspiciatis quam quasi qui quis reiciendis rerum sequi voluptate.
          Commodi corporis culpa iusto maiores nulla provident quis
          voluptatibus? A ab aliquid aut consectetur distinctio exercitationem
          harum illum libero, non omnis perferendis perspiciatis quasi sapiente
          sint, soluta! Alias blanditiis, deleniti distinctio error provident
          quo repellendus voluptates voluptatibus. Ab adipisci assumenda aut
          autem beatae corporis eaque earum ex expedita, harum illum in ipsam
          ipsum itaque laudantium nisi odio officia praesentium, quibusdam
          quidem recusandae reiciendis repellendus sequi tempora veniam,
          voluptatem voluptates voluptatibus. Consectetur corporis enim expedita
          ipsum, officiis sequi. Accusantium amet, asperiores ipsa, ipsam magni
          nam natus possimus sequi ut vel velit veritatis vitae voluptatem.
          Culpa doloremque eos natus nesciunt perspiciatis quas rem
          voluptatibus. Deserunt, dicta ducimus est expedita explicabo facilis
          id illo labore molestias perspiciatis! Asperiores consectetur
          consequuntur distinctio magnam? Autem corporis doloribus impedit odio
          totam voluptatum? Accusantium ad aliquid doloremque eaque error
          expedita fugit illum impedit ipsa iusto mollitia neque non numquam
          omnis perspiciatis quam, quos reprehenderit soluta sunt ut vel
          voluptas voluptatem. Adipisci alias amet assumenda consectetur
          cupiditate et eum eveniet ex excepturi explicabo harum in ipsum
          itaque, laborum molestias nam non odio possimus praesentium quo
          ratione repellat similique sunt tempora tenetur vel vitae
          voluptatibus. Asperiores debitis dignissimos, esse ipsam iure porro
          quis quo rem, repellat sunt tenetur vel. Architecto asperiores
          cupiditate delectus dignissimos, eaque, eos excepturi facere in ipsa
          laborum modi omnis quisquam sapiente. Aliquid animi distinctio dolore
          eligendi error, exercitationem ipsa iure minima nam non odio
          praesentium qui suscipit. A, adipisci alias aliquid aperiam asperiores
          commodi error est exercitationem fuga impedit laborum minus nostrum
          quia quo rem repellat similique tempora. Ad adipisci architecto aut
          autem blanditiis consectetur dolorum eaque earum esse facilis, hic
          laboriosam magnam minima natus necessitatibus odio praesentium
          provident quibusdam saepe sit soluta suscipit vel veniam voluptatem
          voluptatum. Ab aspernatur est laudantium maiores nihil? Dolorum omnis
          quam tempore tenetur! Accusamus accusantium animi atque beatae
          consequuntur cupiditate debitis dicta dignissimos dolorum eligendi ex
          facere incidunt magni molestias nobis odit officia officiis omnis
          perferendis quaerat qui quo recusandae, sapiente sint soluta unde
          voluptatum! Consequatur doloremque explicabo incidunt nulla, quas qui
          quo velit veniam?
        </p>
      </div>
      <div className="float-section__btns">
        <Link to="/chess-board">
          <MainButton direction="Предыдущая таска" />
        </Link>
        <Link to="/form">
          <MainButton direction="Следующая таска" />
        </Link>
      </div>
    </div>
  );
}

export default FloatSection;
