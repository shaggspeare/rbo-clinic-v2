import SEO from '@/components/seo';
import TeamDetails from '@/components/team/team-details/team-details';
import Wrapper from '@/layout/wrapper';
import React from 'react';
import { useRouter } from 'next/router';
import { teamDetailsInfo } from '@/components/team/team-details/team-details-data';

const TeamSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const memberInfo = teamDetailsInfo.find(item => item.key === slug);

  if (!memberInfo) {
    return null;
  }

  return (
    <Wrapper>
      <SEO pageTitle={memberInfo.seo.title} pageDesc={memberInfo.seo.description} />
      <TeamDetails />
    </Wrapper>
  );
};

export default TeamSlug;
