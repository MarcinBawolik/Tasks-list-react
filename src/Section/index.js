import { StyledSection, SectionHeader, SectionTitle, SectionContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionContainer>
            {body}
        </SectionContainer>
    </StyledSection>
);

export default Section;