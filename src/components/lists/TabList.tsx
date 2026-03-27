'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType } from '@/lib/types';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { Link, ListItem, CertificateCard } from '@/components';

import { useState } from 'react';

type Props = {
  experiences: ExperienceType[];
};

const TabList = ({ experiences }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const { role, company, companyUrl, started, upto, tasks, certificateLink, certificateLinks } =
    experiences[activeExperience];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
        left: `calc(${activeExperience}*120px)`,
      }
      : {
        top: `calc(${activeExperience}*2.5rem)`,
      };

  return (
    <div className= "flex flex-col sm:flex-row text-base md:text-lg gap-8 md:gap-12 min-h-[350px]" >
    {/* Sidebar */ }
    < div className = "font-mono text-sm sm:text-base relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[200px]" >
    {
      experiences.map(({ company }, i) => (
        <button
            key= { getId() }
            className = {`h-12 min-w-[140px] sm:w-auto sm:px-6 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent text-sm md:text-base ${i === activeExperience ? 'text-accent' : ''
          }`}
  onClick = {() => setActiveExperience(i)}
          >
  { company }
  </button>
        ))}
{/* Slider */ }
<div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3" > </div>
  < div
style = { sliderStyle }
className = "absolute h-0.5 w-[140px] sm:w-0.5 sm:h-12 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
  > </div>
  </div>

  < div key = { getId() } className = "p-2 space-y-6" >
    <div className="space-y-2" >
      <h3 className="text-2xl font-medium capitalize text-dark-2" >
        { role }{ ' ' }
<Link href={ companyUrl } target = "_blank" className = "text-accent" >
  @{ company }
  </Link>
  </h3>
  < p className = "font-mono text-sm md:text-base capitalize" >
    <>
    { started } - { upto }
    </>
    </p>
    </div>

    < ul className = "space-y-3" >
    {
      tasks.map((task) => (
        <ListItem key= { getId() } > { task } </ListItem>
      ))
    }
      </ul>

        {certificateLink && (
          <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h4 className="mb-2 text-sm font-mono text-slate-400">Credential</h4>
            <CertificateCard name="View Certification" url={certificateLink} issuer={company} />
          </div>
        )}

        {certificateLinks && Object.entries(certificateLinks).length > 0 && (
          <div className="pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h4 className="mb-3 text-sm font-mono text-slate-400">Credentials & Licenses</h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {Object.entries(certificateLinks).map(([name, url]) => (
                <CertificateCard key={getId()} name={name} url={url} issuer={company} />
              ))}
            </div>
          </div>
        )}
</div>
  </div>
  );
};

export default TabList;
