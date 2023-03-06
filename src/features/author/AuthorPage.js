import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"


export default () => (
  <Container>
    <Header
      title="O autorze"
    />
    <Section
      title="Marcin Bawolik"
      body={<>
        <p>
          Moją największą pasją jest <strong>piłka nożna</strong> i od niedawna <strong>programowanie</strong>!
        </p>
        <p>W piłce nożnej odniosłem wiele sukcesów, między innymi <i>Mistrzostwo Polski u15, czy debiut w Reprezentacji Polski u16</i></p>
        Z racji tego, że mam dużo wolnego czasu postanowiłem za namową kolegi spróbować swoich sił właśnie w programowaniu.
        Od samego początku programowanie bardzo mi się spodobało i sprawiłom, że nauce od dłuższego czasu poświęcam każdą wolną chwilę!
        Mam nadzieję, że kurs pomoże mi dostać pracę i będę mógł w pełni rozwijać swoje zainteresownie.
      </>}
    />
  </Container>
);