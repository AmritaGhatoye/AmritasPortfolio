import { AchievementsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const achievementsSection: AchievementsSectionType = {
  title: 'achievements',
  subtitle: 'impact that reflects consistency, performance, and problem-solving ability',
  achievements: [
    {
      id: getId(),
      icon: '🏆',
      metric: '4th place',
      title: 'Secured 4th place',
      description:
        'Among 200+ teams, showcasing innovation and strong problem-solving under pressure.',
    },
    {
      id: getId(),
      icon: '💻',
      metric: 'tech competitions',
      title: 'Participated in technical competitions',
      description:
        'Actively engaged in university coding events and practical tech challenges.',
    },
    {
      id: getId(),
      icon: '📊',
      metric: '200+ DSA',
      title: 'Solved 200+ DSA problems',
      description:
        'Across LeetCode, Coding Ninjas, and GeeksforGeeks with consistent daily practice.',
    },
  ],
};