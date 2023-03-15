export interface IRaceCardProps {
  round: string;
  raceName: string;
  date: Date | number;
}

export type RaceCardType = {
  isLocked: boolean;
};
