import {mount} from "@vue/test-utils";
import AboutMe from "@/views/AboutMe";
import AboutMeDetails from "@/components/AboutMeDetails";

describe('AboutMe.vue', () => {
    it('should find the AboutMeDetails', () => {
        // when
        const wrapper = mount(AboutMe)

        // then
        const aboutMeDetails = wrapper.findComponent(AboutMeDetails)
        expect(aboutMeDetails.exists()).toBeTruthy()
    });
})
