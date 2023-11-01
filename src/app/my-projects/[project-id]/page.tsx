import ProjectDetails from '@/app/components/ProjectDetails';
import getProjectInfo from '@/utils/getProjectInfo';
// import TextCards from 'shared/components/text-cards';
// import { Button, HeaderSmall, ProjectCard } from '@shared-components';
// import { ProjectDetailsContext } from 'shared/utils/contexts';
// import { Project } from 'shared/utils/types';

const getData = async (id: string) => {
  const projectInfo = await getProjectInfo(id);

  return {
    projectInfo,
  };
};

export const revalidate = 15;
type Props = {
  projectInfo: Project[];
};

export default async function ProjectPage({
  params,
}: {
  params: { ['project-id']: string };
}) {
  const { projectInfo }: Props = await getData(params['project-id']);
  // const projectDetails: Project[] = useContext(ProjectDetailsContext);
  return (
    <>
      <div className="dark:bg-blue pt-0 md:pt-32">
        <ProjectDetails data={projectInfo[0]} />
      </div>
    </>
  );
}
