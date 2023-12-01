import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import ProjectContent from 'components/projects/ProjectContent'
import ProjectStoreInitializer from 'components/util/ProjectStoreInitializer'
import { getAllProjects, getProjectBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const project = await getProjectBySlug(params.slug)

    return {
        title: `${project.fields.name} | Garrett Kitchens`,
        description: documentToPlainTextString(project.fields.shortDescription as any),
        openGraph: {
            title: `${project.fields.name} | Garrett Kitchens`,
            description: documentToPlainTextString(project.fields.shortDescription as any),
            images: [
                {
                    url: project.fields.images?.[0]?.fields?.file?.url,
                    width: project.fields.images?.[0]?.fields?.file?.details?.image?.width,
                    height: project.fields.images?.[0]?.fields?.file?.details?.image?.height,
                    alt: project.fields.images?.[0]?.fields?.description,
                },
            ],
        },
    }
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Our Work', href: '/our-work' },
]

export default async function Page({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug)
    const projects = await getAllProjects()

    return (
        <>
            <ProjectStoreInitializer projects={projects} project={project} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 3,
                        name: project.fields.name,
                        href: `/our-work/${project.fields.slug}`,
                    },
                ]}
            />
            <ProjectContent />
        </>
    )
}
