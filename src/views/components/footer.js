import { registerIconLibrary } from '@shoelace-style/shoelace';
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

function Footer () {

    registerIconLibrary('fa', {
        resolver: name => {
            const filename = name.replace(/^fa[rbs]-/, '');
            let folder = 'regular';
            if (name.substring(0, 4) === 'fas-') folder = 'solid';
            if (name.substring(0, 4) === 'fab-') folder = 'brands';
            return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
          },
          mutator: svg => svg.setAttribute('fill', 'currentColor')
    });

    return(
        <footer>
            <p> Copyright <SlIcon library="fa" name='far-copyright'></SlIcon> Ho Bing Lin 2022</p>   
        </footer>
    );
}

export default Footer;