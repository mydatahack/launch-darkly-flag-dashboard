import ScoreCard from '../ScoreCard';
import { StoreState } from '../../types';
import { connect } from 'react-redux';

const mapStateToProps = ({ summary, animate, initialData}: StoreState) => ({
  summary,
  animate,
  fetchingSuccess: initialData.fetchingSuccess
});

const ScoreCardContainer = connect(
  mapStateToProps,
  null
)(ScoreCard);

export default ScoreCardContainer;
