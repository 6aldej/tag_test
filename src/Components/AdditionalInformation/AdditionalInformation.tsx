import moment from 'moment';
import styles from './AdditionalInformation.module.css';

export function AdditionalInformation(
  { info }: { info:any },
) {
  return (
    <div className={styles.additional_information}>
      <p>
        <span>ID метки:</span>
        {' '}
        {info?.id}
      </p>
      <p>
        <span>Тип:</span>
        {' '}
        {info?.id_type}
      </p>
      <p>
        <span>Дата считывания:</span>
        {' '}
        {moment.utc(info.rep_dttm).format('L')}
        {' '}
        {moment.utc(info.rep_dttm).format('LTS')}
      </p>
      <p>
        <span>Дата верификации:</span>
        {' '}
        {moment.utc(info.ver_date).format('L')}
        {' '}
        {moment.utc(info.ver_date).format('LTS')}
      </p>
      <p>
        <span>Описание:</span>
        {' '}
        {info?.id_desc}
      </p>
      <p>
        <span>Имя:</span>
        {' '}
        {info?.holder_name}
      </p>
      <p>
        <span>Подразделение:</span>
        {' '}
        {info?.department}
      </p>
      <p>
        <span>Активность: </span>
        {' '}
        {info?.active_flag ? '✅' : '❌'}
      </p>
    </div>
  );
}
